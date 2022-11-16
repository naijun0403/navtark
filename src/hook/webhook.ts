/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import {DefaultResponseEvent, WebhookEvent} from "../event";
import {ClientOptions} from "../client";
import {TypedEmitter} from "../event";
import {OpenEvent} from "../packet";
import {SendEvent} from "../packet";
import * as https from "https";

export class WebhookClient extends TypedEmitter<WebhookEvent> {
    private readonly express: express.Express;

    constructor(
        private options: ClientOptions
    ) {
        super();
        this.express = express()
        this.express.use(bodyParser.json())
        this.express.set('port', options.port)
        const server = https.createServer(options, this.express)
        server.on('error', (err) => {
            throw err;
        })
        server.on('listening', () => {

        })
        server.listen(options.port)
    }

    async start() {
        this.express.get('/', async (req, res, next) => {
            await res.status(200).json({
                message: 'navtark client running...'
            });
        })

        this.express.post(this.options.path, (req, res) => {
            const body = req.body as DefaultResponseEvent;
            switch (body.event) {
                case "open": {
                    this.emit('open', body as OpenEvent);
                    this.emit('push_packet', body)
                    break;
                }

                case "send": {
                    this.emit('send', body as SendEvent);
                    this.emit('push_packet', body)
                    break;
                }

                default: {
                    this.emit('push_packet', body)
                }
            }
            res.sendStatus(200);
        });
    }
}