import { Module } from '@nestjs/common';
import { ShortsController } from './shorts.controller';
import { ShortsService } from './shorts.service';

@Module({
  controllers: [ShortsController],
  providers: [ShortsService],
})
export class ShortsModule {}
