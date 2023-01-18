import { Test, TestingModule } from '@nestjs/testing';
import { AudioDownloaderController } from './audio-downloader.controller';
import { AudioDownloaderService } from './audio-downloader.service';

describe('AudioDownloaderController', () => {
  let controller: AudioDownloaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudioDownloaderController],
      providers: [AudioDownloaderService],
    }).compile();

    controller = module.get<AudioDownloaderController>(AudioDownloaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
