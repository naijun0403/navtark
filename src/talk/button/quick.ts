/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {QuickReply} from "../../packet";
import {ButtonObject} from "../../packet";

export class QuickReplyBuilder {
    private readonly obj: QuickReply;

    constructor() {
        this.obj = {
            quickReply: {
                buttonList: []
            }
        }
    }

    setText(text: string): QuickReplyBuilder {
        this.obj['text'] = text;
        return this;
    }

    setCode(code: string): QuickReplyBuilder {
        this.obj['code'] = code;
        return this;
    }

    addButton(button: ButtonObject): QuickReplyBuilder {
        this.obj.quickReply.buttonList.push(button);
        return this;
    }

    build(): QuickReply {
        return this.obj;
    }

    static newBuilder(): QuickReplyBuilder {
        return new QuickReplyBuilder();
    }
}