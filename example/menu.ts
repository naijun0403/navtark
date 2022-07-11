/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { NavtarkClient, DetailMenuBuilder, MenuBuilder, MenuDataBuilder } from "navtark";
import * as fs from "fs";

const client = new NavtarkClient({
    path: '/webhook',
    auth: 'Auth Key',
    port: 443,
    key: fs.readFileSync(`path`),
    cert: fs.readFileSync(`path`),
    ca: fs.readFileSync(`path`)
});

client.setMenu(
    MenuBuilder
        .newBuilder()
        .addMenu(
            DetailMenuBuilder
                .newBuilder()
                .addType('TEXT') // TEXT
                .addData(
                    MenuDataBuilder.newBuilder()
                        .setTitle("테스트 메뉴")
                        .setCode("TEST") // code
                        .build()
                )
                .build()
        )
        .build()
);