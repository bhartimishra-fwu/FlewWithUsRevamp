  import express from "express";
  import logger from "morgan";
  import path from "path";
  import cors from "cors";
  import { IndexRoute } from "@Routes/index";
  import dotenv from "dotenv";
  import { BaseApp } from "@Base";
  import upload from "express-fileupload";
  
  declare const global: any;
  dotenv.config();
  class App {
    public app: express.Application;
  
    public static bootstrap(): App {
      return new App();
    }
  
    constructor() {
      this.app = express();
      this.initializeConfigsAndRoute();
    }
  
    public async initializeConfigsAndRoute() {
      this.app.use(logger("dev"));
      this.app.use(cors());
      this.app.use(upload());
      this.app.use(express.json({ limit: "6000mb" }));
      this.app.use(express.urlencoded({ extended: true, limit: "6000mb" }));  
      global.BasePath = __dirname;
  
      global.AbsPath = (path: string) => {
        return BasePath + path;
      };
      global.FWURequire = (file: string) => {
        return require(AbsPath("/" + file));
      };
      global.APP = new BaseApp(this.app);
      await global.APP.initialize();
      await this.routes();
    }
  
  
  
    /**
     * Create and return Router.
     *
     * @class Server
     * @method routes
     * @return void
     */
    private async routes() {
      // let router: express.Router;
      // router = express.Router();
      await new IndexRoute(this.app).init();
      //use router middleware
    }
  
    public listen() {
      this.app.listen(process.env.PORT, () => {
        console.log(`App listening on the port ${process.env.PORT}`);
      });
    }
  
  }
  
  export default App;