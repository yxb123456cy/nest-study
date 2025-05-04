import { Bind, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
//app 为路由前缀;
//export declare function Controller(prefix: string | string[]): ClassDecorator;
@Controller('/app')
/**
 * 控制器层; 控制器负责处理传入的请求,并向客户端返回响应;与SpringBoot的Controller是一样的;
 */
export class AppController {
  constructor(private readonly appService: AppService) {}

  //export declare const Get: (path?: string | string[]) => MethodDecorator;
  @Get('/hello')
  @Bind(Req())
  getHello(request: Request): string {
    console.log(request.host); //localhost:3000;
    console.log(request.ip); //::1
    return this.appService.getHello();
  }
}
