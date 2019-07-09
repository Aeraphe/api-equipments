// lib/app.ts
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import CoreRoutes from './routes/app.core.routes';
import MongoDb from './shared/services/mongodb';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import "reflect-metadata";


export class App {
    public app: express.Application;
    public db: any;
    public mysql: any;

    constructor() {
        this.app = express();
        this.config();
    
    }

    private async config(): Promise<void> {
        this.app.use(logger('dev'));
        // MongoDb 2
        this.db = await MongoDb.connect();
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // //Public Folder For Static Angular Files
        // let rootPath = __dirname.replace('/api-gateway/app', "");
        // let pathPublicFolder = path.join(rootPath + '/public');
        // let publicFolder = pathPublicFolder.replace('/dist/api-gateway', '');
        // this.app.use('/public', express.static(publicFolder));
        this.app.use(cookieParser());
        // Request protection
        this.app.use(helmet());
        // Default Api Route Group
        this.app.use('/api/v1', CoreRoutes);
        // Redirect unmatch routes
        this.app.use((req, res) => {
          
        });
    }
}
