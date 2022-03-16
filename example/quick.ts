/**
 * Created by naijun at 2022/03/16
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { NavtarkClient, ButtonBuilder, QuickReplyBuilder } from "navtark";
import * as fs from "fs";

const client = new NavtarkClient({
    path: '/webhook',
    auth: 'Auth Key',
    port: 443,
    key: fs.readFileSync(`path`),
    cert: fs.readFileSync(`path`),
    ca: fs.readFileSync(`path`)
});

client.on('chat', (data, session) => {
    if (data.text === '/quick') {
        session.setQuick(
            QuickReplyBuilder.newBuilder()
                .setText("test")
                .setCode("TEST")
                .addButton(
                    ButtonBuilder.newBuilder()
                        .setType('TEXT')
                        .addTitle("test")
                        .addCode("TEST") // code
                        .build()
                )
                .build()
        )
    }
});