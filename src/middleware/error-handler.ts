import { NextFunction, Response, Request } from "express";
import { CustomAPIError } from "../errors/costum-errors";

export const errorHandlerMiddleware = (
  err: CustomAPIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};
