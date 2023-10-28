/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { ButtonObject } from './button';

export * from './button';
export * from './open';
export * from './persistent-menu';
export * from './send';

export interface Content {
    quickReply?: {
        buttonList?: ButtonObject[];
    }
}