import express, { Application } from "express";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as path from "path";
import * as Logger from "bunyan";

import Connect from "./connect";
import errorMiddleware from "./Middlewares/error.middleware";

import AppInitialiser from "./Interfaces/misc/appInitialiser.interface";
import Controller from "./Interfaces/controller/controller.interface";

class App {
  public app: Application;
  private port: number;
  private baseUrl: string;
  private readonly logger: Logger;

  constructor({ baseUrl, controllers, dbUrl, logger, port }: AppInitialiser) {
    this.app = express();
    this.port = port;
    this.baseUrl = baseUrl;
    this.logger = logger;

    this.connectToDatabase(dbUrl);
    this.initialiseMiddlewares();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandlerMiddleware();
  }

  private connectToDatabase(dbUrl: string) {
    Connect({ db: dbUrl });
  }

  private initialiseMiddlewares() {
    // Body Parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    // Static Files
    this.app.use(
      this.baseUrl + "/static",
      express.static(path.join(__dirname, "..", "public"))
    );

    // Request Logging
    this.app.use((req, res, next) => {
      this.logger.info(`${req.method} ${req.path}`);
      next();
    });
  }

  private initialiseControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use(this.baseUrl, controller.router);
    });
  }

  private initialiseErrorHandlerMiddleware() {
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default App;
