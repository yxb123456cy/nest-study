import { Injectable } from '@nestjs/common';

/**
 * 业务层;
 * Injectable() 装饰器类似于SpringBoot中的@compoment注解;
 */
@Injectable()
export class AppService {
  getHello(): string {
    return '学习Nest.js';
  }
}
