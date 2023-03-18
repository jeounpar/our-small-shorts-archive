import { Shorts } from 'src/entity/shorts';

export interface ShortsRepository {
  save(shorts: Shorts): Promise<Shorts>;
  delete(url: string): Promise<boolean>;
}
