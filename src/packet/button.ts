/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

export type ButtonType = 'TEXT' | 'LINK' | 'OPTION' | 'PAY';

export interface ButtonObject {
    type: ButtonType;
    data: {
        [key: string]: unknown;
    }
}

export interface ButtonTextObject extends ButtonObject {
    type: 'TEXT';
    data: {
        title: string;
        code: string;
    }
}

export interface ButtonLinkObject extends ButtonObject {
    type: 'LINK';
    data: {
        title: string;
        url: string;
        mobileUrl: string;
    }
}

export interface ButtonOptionObject extends ButtonObject {
    type: 'OPTION';
    data: {
        title: string;
        buttonList: ButtonObject[];
    }
}