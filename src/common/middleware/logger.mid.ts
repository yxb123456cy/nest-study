import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

/**
 * 类中间件;需要实现NestMiddleware接口中的use方法;
 */
@Injectable()
export class LoggerMid implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('请求开始', req, req);
    next();
  }
}
