/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {ButtonObject, ButtonType} from "../../packet";

export class ButtonBuilder {
    private readonly obj: ButtonObject;

    constructor() {
        this.obj = {
            type: 'TEXT',
            data: {}
        }
    }

    setType(type: ButtonType): ButtonBuilder {
        this.obj['type'] = type;
        return this;
    }

    addTitle(title: string): ButtonBuilder {
        this.obj.data['title'] = title;
        return this;
    }

    addCode(code: string): ButtonBuilder {
        this.obj.data['code'] = code;
        return this;
    }

    addUrl(url: string): ButtonBuilder {
        this.obj.data['url'] = url;
        return this;
    }

    addMobileUrl(url: string): ButtonBuilder {
        this.obj.data['mobileUrl'] = url;
        return this;
    }

    addBothUrl(url: string): ButtonBuilder {
        this.obj.data['url'] = url;
        this.obj.data['mobileUrl'] = url;
        return this;
    }

    addButtonList(buttonArray: ButtonObject[]): ButtonBuilder {
        this.obj.data['buttonList'] = buttonArray;
        return this;
    }

    build(): ButtonObject {
        return this.obj;
    }

    static newBuilder() {
        return new ButtonBuilder()
    }
}

export * from './quick';