import mongoose from "mongoose";
import { ConfigTypes } from "@Types/config";
import { GlobalTypes } from "@Types/globals";
import { MiddlewareTypes } from "@Types/middlewares";
import { PluginsTypes } from "@Types/plugins";


/* eslint-disable no-var */
declare global {
    const BasePath: string;
    const __root: string;
    function AbsPath(arg1: string): string;
    var APP: {
        user: Express.Request.decoded;
        MongoDB: mongoose;
        RDC: redis;
        CONFIGS: ConfigTypes;
        GLOBALS: GlobalTypes;
        MIDDLEWARES: MiddlewareTypes;
        PLUGINS: PluginsTypes;
        MONGODBMODELS: any;
    };
    var FWURequire: any;
    namespace Express {
        export interface Request {
            decoded?: {
                UID: string;
                userId: string;
                SessionId: string;
            };
        }
    }
}

export { }