/**
 * Created by naijun on 2022/01/30
 * Copyright (c) naijun.
 * This code is licensed under the MIT Licensing Principles.
 */

import axios, {AxiosRequestConfig, Method} from "axios";
import {structToResult} from "./struct";
import {BaseRequestRes, ProcessResponse} from "./index";
import {DefaultRequestEvent} from "../event";

export type httpScheme = 'https' | 'http'

export class WebClient {
    constructor(
        public scheme: httpScheme,
        public host: string,
        public auth?: string
    ) {

    }

    get url(): string {
        return `${this.scheme}://${this.host}`;
    }

    getApiURL(path: string): string {
        return `${this.url}/${path}`;
    }

    async request(
        method: Method,
        path: string,
        form?: Record<string, unknown> | DefaultRequestEvent,
        headers?: Record<string, string>
    ): Promise<string> {
        const reqData = this.build(method, headers);
        reqData['url'] = this.getApiURL(path);

        if(form) reqData['data'] = form;

        const res = await axios(reqData)

        if(res.status !== 200) {
            throw new Error(`Web request failed with status: ${res.status} ${res.statusText}`);
        }

        return res.data
    }

    async requestData<T = Record<string, unknown>>(
        method: Method,
        path: string,
        form?: Record<string, unknown> | DefaultRequestEvent,
        headers?: Record<string, string>
    ): ProcessResponse {
        const res = await this.request(method, path, form, headers);
        return await structToResult(JSON.parse(res) as BaseRequestRes);
    }

    private build(method: Method, header?: Record<string, string>): AxiosRequestConfig {
        const headers: Record<string, string> = {};
        headers['Host'] = this.host;
        if (header) Object.assign(headers, header);
        headers['Authorization'] = this.auth;
        headers['Content-Type'] = 'application/json;charset=UTF-8';
        return {
            headers,
            method,
            transformResponse: (data) => data,
            responseType: 'text'
        }
    }
}