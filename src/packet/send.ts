/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {DefaultResponseEvent} from "../event";

export interface SendEvent extends DefaultResponseEvent {
    textContent: {
        text: string;
        code?: string;
        inputType: string;
    },
    messageId: number;
    options: { noReflectBot: boolean; mobile: boolean; receiverBotId?: string; }
}