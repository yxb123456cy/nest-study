import {
    ArgumentsHost,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';

/**
 * 实现ExceptionFilter接口并重写Catch方法;
 */
//NameErrorException 限定只能捕获NameErrorException异常;
//实测 不用这个装饰器就是捕获所有异常;

export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
