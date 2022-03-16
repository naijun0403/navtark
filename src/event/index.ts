/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {OpenEvent} from "../packet/open";
import {SendEvent} from "../packet/send";
import {TalkChatData} from "../talk/chat";
import {TalkSession} from "../talk/session";

type Event = 'open' | 'send' | 'leave' | 'friend' | 'echo' | 'persistentMenu';

export interface DefaultResponseEvent {
    event: Event;
    user: string;
}

export interface DefaultRequestEvent {
    event: Event;
}

export type WebhookEvent = {
    open: (data: OpenEvent)=> void;
    send: (data: SendEvent) => void;
    push_packet: (data: DefaultResponseEvent) => void;
}

export interface ChatEvent {
    chat: (data: TalkChatData, session: TalkSession) => void;
}

export interface ServerEvent {
    push_packet: (data: DefaultResponseEvent) => void;
}

export type ClientEvent = ChatEvent & ServerEvent;

export * from './eventemitter';