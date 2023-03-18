import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shorts } from 'src/entity/shorts';
import { ShortsRepository } from 'src/interface/shorts.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PostgresqlRepository implements ShortsRepository {
  constructor(
    @InjectRepository(Shorts)
    private readonly shortsRepository: Repository<Shorts>,
  ) {}
  async save(shorts: Shorts): Promise<Shorts> {
    this.shortsRepository.save(shorts);
    return shorts;
  }
  async delete(url: string): Promise<boolean> {
    console.log(url);
    return true;
  }
}
