import { Body, Controller, Post } from '@nestjs/common';
import { UrlDto } from 'src/dto/url.dto';
import { ShortsService } from './shorts.service';

@Controller('shorts')
export class ShortsController {
  constructor(private readonly shortsService: ShortsService) {}

  @Post()
  async postShorts(@Body() body: UrlDto) {
    return this.shortsService.postShorts(body.url);
  }
}
