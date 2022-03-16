/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */
import {DefaultResponseEvent} from "../event";

export interface OpenEvent extends DefaultResponseEvent {
    options: {
        inflow: string,
        referer?: string;
        from?: string;
        friend: false;
        under14: false;
        under19: false;
    }
}