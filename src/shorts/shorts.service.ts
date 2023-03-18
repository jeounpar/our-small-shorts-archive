import { Inject, Injectable } from '@nestjs/common';
import { Shorts } from 'src/entity/shorts';
import { ShortsRepository } from 'src/interface/shorts.repository';

@Injectable()
export class ShortsService {
  constructor(
    @Inject('ShortsRepoitory')
    private readonly shortsRepository: ShortsRepository,
  ) {}

  async postShorts(url: string) {
    const newShorts = await this.newUrl(url);
    this.shortsRepository.save(newShorts);
    return url;
  }

  async newUrl(url: string): Promise<Shorts> {
    const newShorts = new Shorts();
    newShorts.url = url;
    return newShorts;
  }
}
