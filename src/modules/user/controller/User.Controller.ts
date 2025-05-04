import {
  Bind,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { User } from '../../../types/domain/User';
import { UserService } from '../service/User.Service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //export declare const Get: (path?: string | string[]) => MethodDecorator;
  @Get('/hello')
  @Bind(Req())
  @HttpCode(200)
  //export declare function Redirect(url?: string, statusCode?: number): MethodDecorator;
  @Redirect('https://nest.nodejs.cn/', 302)
  getHello(request: Request): string {
    console.log(request.host); //localhost:3000;
    console.log(request.ip); //::1
    return 'Hello World';
  }

  //路由参数;
  @Get('/list/:version')
  getUserList(@Param('version') version: string): Array<User> {
    const userList: Array<User> = [
      { name: '唐浩然', age: 18, school: '南昌航空大学科技学院' },
      { name: '周瑞', age: 20, school: '南昌航空大学科技学院' },
    ];
    console.log(version);
    console.log('Hello,UserList');
    return userList;
  }

  @Get('/query')
  @HttpCode(200)
  //export declare function Redirect(url?: string, statusCode?: number): MethodDecorator;
  queryTest(
    @Query('name') name: string,
    @Query('age') age: number,
    @Query('school') school: string,
  ): string {
    console.log(`学校:${name}, age: ${age}, school: ${school}`);
    return 'Hello World';
  }

  @Post('/create')
  @HttpCode(200)
  createUser(@Body() CreateUserDto: CreateUserDto): CreateUserDto {
    console.log('创建User');
    return CreateUserDto;
  }
}
