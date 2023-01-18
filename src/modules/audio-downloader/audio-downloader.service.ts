import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AudioDownloaderService {
  constructor(
    @InjectQueue('audio_downloader_queue_name') private readonly queue: Queue,
  ) {}
  // This is producer
  async downloadAudio(audioUrl: string): Promise<string> {
    // We are assuming at the same time, we have many request download audio.
    // So we create an arrays contains 4 audio url. Then use for loop to add job to queue
    const urls = [
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    ];
    // Push audio url to queue
    for (const audioUrl of urls) {
      await this.queue.add('audio_downloader_job_name', {
        audioUrl: audioUrl,
      });
    }
    return audioUrl;
  }
}
