export interface PostingService {
  post(url: string): Promise<boolean>;
}
