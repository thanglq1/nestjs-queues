import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioDownloaderModule } from './modules/audio-downloader/audio-downloader.module';

@Module({
  imports: [AudioDownloaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
