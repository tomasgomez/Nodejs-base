'use strict';
import express from 'express';
import helmet from 'helmet';
import Logger from './lib/logger';
import Configuration from './config';
import morganMiddleware from './config/morganMiddleware'
export default class Server {
    protected app: express.Application;

    constructor(NODE_ENV: string = 'DEV') {

        this.app = express();

        // middlewares
        this.app.use(helmet());
        this.app.use(morganMiddleware);
        
        //TODO move configuration implementation to a makeConfig factory
        const host = process.env.HOST;
        const port = Number(process.env.PORT);
        const config = new Configuration(host, port);
                
        this.app.get('/health', (req, res) => {
            res.status(200).send('OK');
        });
        
        //TODO handle error in server running
        this.app.listen(config.getPort(), config.getHost(), (): void => {
            Logger.debug(`Running on http://${host}:${port}`);
        });
    }
}

