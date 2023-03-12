import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortsService {
  async postShorts(url: string) {
    return url;
  }
}
