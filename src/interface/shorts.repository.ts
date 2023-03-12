import { Shorts } from 'src/entity/shorts';

export interface ShortsRepository {
  save(): Promise<Shorts>;
  delete(): Promise<boolean>;
}
