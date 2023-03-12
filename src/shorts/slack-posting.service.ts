import { PostingService } from '../interface/posting.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SlackPostingService implements PostingService {
  async post(url: string) {
    console.log(url);
    return true;
  }
}
