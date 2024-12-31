import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Server is live at Port: ${process.env.NEST_APP_PORT}`;
  }
}
