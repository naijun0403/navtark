/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {DetailMenu, MenuData, MenuType, PersistentMenu} from "../../packet";

export class MenuBuilder {
    private readonly data: PersistentMenu;

    constructor() {
        this.data = {
            event: 'persistentMenu',
            menuContent: [{
                menus: []
            }]
        }
    }

    addMenu(data: DetailMenu): MenuBuilder {
        this.data.menuContent[0].menus.push(data);
        return this;
    }

    build(): PersistentMenu {
        return this.data;
    }

    static newBuilder() {
        return new MenuBuilder();
    }
}

export class DetailMenuBuilder {
    private readonly data: DetailMenu;

    constructor() {
        this.data = {

        }
    }

    addType(type: MenuType): DetailMenuBuilder {
        this.data['type'] = type;
        return this;
    }

    addData(data: MenuData): DetailMenuBuilder {
        this.data['data'] = data;
        return this;
    }

    build(): DetailMenu {
        return this.data;
    }

    static newBuilder() {
        return new DetailMenuBuilder();
    }
}

export class MenuDataBuilder {
    private readonly data: MenuData;

    constructor() {
        this.data = {

        }
    }

    setTitle(title: string): MenuDataBuilder {
        this.data['title'] = title;
        return this;
    }

    setUrl(url: string): MenuDataBuilder {
        this.data['url'] = url;
        return this;
    }

    setMobileUrl(url: string): MenuDataBuilder {
        this.data['mobileUrl'] = url;
        return this;
    }

    setBothUrl(url: string): MenuDataBuilder {
        this.data['url'] = url;
        this.data['mobileUrl'] = url;
        return this;
    }

    setCode(code: string): MenuDataBuilder {
        this.data['code'] = code;
        return this;
    }

    build(): MenuData {
        return this.data;
    }

    static newBuilder() {
        return new MenuDataBuilder()
    }
}