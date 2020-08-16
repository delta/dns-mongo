import { Router, Request, Response, NextFunction } from "express";
import logger from "../Utils/logger";

import Controller from "../Interfaces/controller/controller.interface";

class GeneralController implements Controller {
  public path = "";
  public router = Router();
  private readonly logger = logger.getNamedLogger("Controller [General]");

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    this.router.get(`${this.path}/status`, this.getStatus);
  }

  private getStatus = (req: Request, res: Response, next: NextFunction) => {
    // try{
    //   throw new Error("XD");
    // } catch(err){
    //   return next(new HttpException({status: 500, message:`Internal Server error!`, logger: this.logger, err})); // Example for exceptions
    // }
    return res
      .status(200)
      .jsonp({ status: 200, success: true, message: "Api is running !" });
  };
}

export default GeneralController;
