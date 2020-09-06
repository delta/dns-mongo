import { Request } from "express";
import User from "../model/user.interface";

interface RequestWithUser extends Request {
  user?: User;
}

export default RequestWithUser;
