/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { ButtonObject, SendEvent } from '../../packet';
import { ImageContent } from '../../packet/image';
import { CompositeContent } from '../../packet/composite';
import { TextContent } from '../../packet/text';

export interface Chat {
    textContent?: TextContent;
    imageContent?: ImageContent;
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