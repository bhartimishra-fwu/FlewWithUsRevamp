import { NextFunction, Request, Response, Router } from "express";

class BaseRoute {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.index);
  }

  private index = async (request: Request, response: Response, next: NextFunction) => {
    response.send("hi BaseRoute");
  };
}

export default BaseRoute;