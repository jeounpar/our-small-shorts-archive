import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shorts } from 'src/entity/shorts';
import { PostgresqlRepository } from './postgresql-shorts.repository';
import { ShortsController } from './shorts.controller';
import { ShortsService } from './shorts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shorts])],
  controllers: [ShortsController],
  providers: [
    ShortsService,
    { provide: 'ShortsRepoitory', useClass: PostgresqlRepository },
  ],
})
export class ShortsModule {}
