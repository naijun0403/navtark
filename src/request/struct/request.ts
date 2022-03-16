/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import {BaseRequestRes, ProcessResponse} from "../index";

export async function structToResult(res: BaseRequestRes): ProcessResponse {
    return { success: res.success, status: parseInt(res.resultCode) }
}