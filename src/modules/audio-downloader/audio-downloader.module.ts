import { Module } from '@nestjs/common';
import { AudioDownloaderService } from './audio-downloader.service';
import { AudioDownloaderController } from './audio-downloader.controller';
import { BullModule } from '@nestjs/bull';
import { AudioDownloaderConsumer } from './audio-downloader.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
    }),
    BullModule.registerQueue({
      name: 'audio_downloader_queue_name',
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
    }),
  ],
  controllers: [AudioDownloaderController],
  providers: [AudioDownloaderService, AudioDownloaderConsumer],
})
export class AudioDownloaderModule {}
