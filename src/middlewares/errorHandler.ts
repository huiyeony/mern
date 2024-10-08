import { Request, Response, NextFunction } from "express";
import { HttpCode } from "../types/httpCode";

export class HttpException extends Error {
  status: number;
  constructor(status?: number, message?: string) {
    super(message);
    this.status = status || HttpCode.INTERNAL_SERVER_ERROR;
  }
}
export const ErrorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.status;
  const errMsg = err.message;

  res.status(errStatus).json({
    message: errMsg,
  });
};
