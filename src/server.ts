'use strict';

import express from 'express';
//TODO remove dotenv configuration https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
import dotenv from 'dotenv';
import Configuration from './config';

// Config env variables
dotenv.config();

//TODO move configuration implementation to a makeConfig factory
const host = process.env.HOST;
const port = Number(process.env.PORT);
const config = new Configuration(host, port);

// App
const app = express();

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(config.getPort(), config.getHost(), (): void => {
    console.log(`Running on http://${host}:${port}`);
});
