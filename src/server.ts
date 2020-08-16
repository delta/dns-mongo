import config from "config";
import App from "./app";
import logger from "./Utils/logger";

import GeneralController from "./Controllers/general.controller";
import AuthController from "./Controllers/auth.controller";

const app = new App({
  baseUrl: config.get("server.proxy"),
  controllers: [new GeneralController(), new AuthController()],
  dbUrl: config.get("db.url"),
  logger: logger.getNamedLogger("App"),
  port: config.get("server.port"),
});

app.listen();
