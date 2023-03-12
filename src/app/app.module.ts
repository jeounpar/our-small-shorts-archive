import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shorts } from 'src/entity/shorts';
import { ShortsModule } from 'src/shorts/shorts.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Shorts],
      logging: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ShortsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
