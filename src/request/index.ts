/**
 * Created by naijun on 2022/01/31
 * Copyright (c) naijun.
 * This code is licensed under the MIT Licensing Principles.
 */

interface RootResponse {
    readonly success: boolean;
    readonly status: number;
}

interface ProcessFailed extends RootResponse {
    readonly success: false;
}

interface ProcessSuccess extends RootResponse {
    readonly success: true;
}

export interface BaseRequestRes {
    success: boolean;
    resultCode: string;
    resultMessage: string;
}

export type ProcessResponse =
    Promise<ProcessFailed | ( ProcessSuccess )>;

export * from './web-client';
export * from './struct';