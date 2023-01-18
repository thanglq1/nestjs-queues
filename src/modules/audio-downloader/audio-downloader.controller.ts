import { Body, Controller, Post } from '@nestjs/common';
import { AudioDownloaderService } from './audio-downloader.service';
import { DownloadAudioDto } from './dto/audio.dto';

@Controller('audio-downloader')
export class AudioDownloaderController {
  constructor(
    private readonly audioDownloaderService: AudioDownloaderService,
  ) {}

  @Post()
  async downloadAudio(@Body() downloadAudioDto: DownloadAudioDto) {
    return await this.audioDownloaderService.downloadAudio(
      downloadAudioDto.audioUrl,
    );
  }
}
