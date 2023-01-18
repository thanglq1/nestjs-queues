import { Test, TestingModule } from '@nestjs/testing';
import { AudioDownloaderService } from './audio-downloader.service';

describe('AudioDownloaderService', () => {
  let service: AudioDownloaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudioDownloaderService],
    }).compile();

    service = module.get<AudioDownloaderService>(AudioDownloaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
