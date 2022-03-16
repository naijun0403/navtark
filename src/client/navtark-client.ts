/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {checkPath} from "../util/path";
import {WebhookClient} from "../hook";
import {PersistentMenu} from "../packet";
import {ProcessResponse, WebClient} from "../request";
import {TalkChatData} from "../talk";
import {TypedEmitter} from "../event";
import {ClientEvent} from "../event";
import {TalkSession} from "../talk";
import * as https from "https";

export class NavtarkClient extends TypedEmitter<ClientEvent> {
    private readonly client: WebClient;

    constructor(
        private options: ClientOptions
    ) {
        super();
        if (!checkPath(options.path)) throw new Error('path does not match the format')
        const webhook = new WebhookClient(this.options);
        webhook.start()
        this.client = new WebClient('https', 'gw.talk.naver.com', options.auth)
        this.listen(webhook)
    }

    async setMenu(data: PersistentMenu): ProcessResponse {
        return await this.client.requestData(
            'POST',
            '/chatbot/v1/event',
            data
        )
    }

    listen(webhook: WebhookClient) {
        webhook.on('send', data => {
            const chatData = new TalkChatData(data);
            const session = new TalkSession(data.user, this.client);
            this.emit('chat', chatData, session);
        });

        webhook.on('push_packet', data => {
            this.emit('push_packet', data);
        })
    }
}

export interface ClientOptions extends https.ServerOptions {
    path: string;
    auth: string;
    port: number;
    key: Buffer;
    ca: Buffer;
    cert: Buffer;
}