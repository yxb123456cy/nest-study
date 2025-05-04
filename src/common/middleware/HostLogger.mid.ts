import { NextFunction, Request, Response } from 'express';

/**
 * 函数式中间件;
 * @param req
 * @param res
 * @param next
 * @constructor
 */
export function HostLoggerMid(req: Request, res: Response, next: NextFunction) {
  console.log(`打印Host: ${req.host}`);
  next();
}
