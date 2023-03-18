import { IsString } from 'class-validator';

export class UrlDto {
  @IsString()
  url: string;
}
