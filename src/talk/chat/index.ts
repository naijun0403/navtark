/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { SendEvent } from "../../packet";
import { Image } from '../../packet/image';
import { CompositeContent } from '../../packet/composite';

export interface Chat {
    textContent?: {
        text: string;
    };
    imageContent?: Image;
    compositeContent?: CompositeContent;
}

export class TalkChatData {
    constructor(
        private event: SendEvent
    ) {
    }

    get text(): string {
        if (this.event.textContent === undefined) return '';
        return this.event.textContent.text || '';
    }

    get userId(): string {
        return this.event.user
    }

    get chat(): SendEvent {
        return this.event;
    }

    get code(): string {
        if (this.event.textContent === undefined) return '';
        return this.event.textContent.code || '';
    }

    get inputType(): string {
        if (this.event.textContent === undefined) return '';
        return this.event.textContent.inputType || '';
    }
}