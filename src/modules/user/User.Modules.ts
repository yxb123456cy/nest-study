import { Module } from '@nestjs/common';
import { UserController } from './controller/User.Controller';
import { UserService } from './service/User.Service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModules {}
