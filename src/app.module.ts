import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModules } from './modules/user/User.Modules';
import { LoggerMid } from './common/middleware/logger.mid';
import { HostLoggerMid } from './common/middleware/HostLogger.mid';
import cors from 'cors';
@Module({
  imports: [UserModules],
  controllers: [AppController],
  providers: [AppService],
})
/**
 * 需要实现configure方法 consumer.apply(中间件).forRoutes() //定义生效路由;
 * exclude排除特定路由;
 */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // 应用多个中间件;
    consumer.apply(cors).forRoutes('*'); //全路由生效跨域;
    consumer.apply(LoggerMid).exclude('').forRoutes('/user');
    consumer.apply(HostLoggerMid).forRoutes('*');
  }
}
