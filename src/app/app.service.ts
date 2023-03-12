import { Inject, Injectable } from '@nestjs/common';
import { PostingService } from 'src/interface/posting.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
