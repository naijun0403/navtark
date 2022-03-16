/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {DefaultRequestEvent} from "../event";

export type MenuType = 'TEXT' | 'LINK' | 'NESTED'

export interface PersistentMenu extends DefaultRequestEvent {
    event: 'persistentMenu',
    menuContent: MenuContent[]
}

interface MenuContent {
    menus?: DetailMenu[];
}

export interface DetailMenu {
    type?: MenuType,
    data?: MenuData;
}

export interface MenuData extends MenuContent {
    title?: string;
    url?: string;
    mobileUrl?: string;
    code?: string;
}