import { HttpException, HttpStatus } from '@nestjs/common';

export class NameErrorException extends HttpException {
  constructor() {
    super('陈颍-拒绝访问', HttpStatus.FORBIDDEN);
  }
}
