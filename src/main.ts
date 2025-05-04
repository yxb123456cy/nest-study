import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //从process.env中 读取项目Port配置 若没有 则使用默认的3000端口;
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
