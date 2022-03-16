/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {ButtonObject} from "./button";

export interface QuickReply {
    text?: string;
    code?: string;
    quickReply?: {
        buttonList?: ButtonObject[];
    }
}