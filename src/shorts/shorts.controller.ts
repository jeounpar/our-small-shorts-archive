import { Body, Controller, Post } from '@nestjs/common';
import { ShortsService } from './shorts.service';

@Controller('shorts')
export class ShortsController {
  constructor(private readonly shortsService: ShortsService) {}

  @Post()
  async postShorts(@Body() body) {
    return this.shortsService.postShorts(body.url);
  }
}
