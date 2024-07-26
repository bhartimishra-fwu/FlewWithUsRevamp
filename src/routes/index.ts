import express, { NextFunction, Request, Response, Router } from "express";
import BaseRoute from "@Routes/base.route";

export class IndexRoute {
    public appObj: express.Application;
    constructor(app: express.Application) {
      this.appObj = app;
    }
    public init() {
        this.appObj.use("/fwu/api/v1/", new BaseRoute().router);
    }
}