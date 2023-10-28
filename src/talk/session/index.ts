/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {ProcessResponse, WebClient} from "../../request";
import {Chat} from "../chat";

export class TalkSession {
    constructor(
        private user: string,
        private client: WebClient
    ) {
    }

    async sendChat(chat: string | Chat): ProcessResponse {
        if (typeof chat === 'string') {
            chat = {
                textContent: {
                    text: chat
                }
            } as Chat
        }

        return await this.client.requestData(
            'POST',
            '/chatbot/v1/event',
            {
                event: 'send',
                user: this.user,
                ...chat
            }
        )
    }
}