/**
 * Created by naijun at 2022/03/15
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import { NavtarkClient } from 'navtark';
import * as fs from "fs";

const client = new NavtarkClient({
    path: '/webhook',
    auth: 'Auth Key',
    port: 443,
    key: fs.readFileSync(`path`),
    cert: fs.readFileSync(`path`),
    ca: fs.readFileSync(`path`)
})

client.on('chat', (data, session) => {
    if (data.text === '/안녕하세요') {
        session.sendChat('네! 안녕하세요 :D');
    }
});