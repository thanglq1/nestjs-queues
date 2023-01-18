import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { downloadAudioUrl } from 'src/shared/utils';

@Processor('audio_downloader_queue_name')
@Injectable()
export class AudioDownloaderConsumer {
  @Process('audio_downloader_job_name')
  async downloadAudio(job: Job<unknown>) {
    console.log('job.data:::', job.data);
    if (!job || !job.data || !job.data['audioUrl']) return;
    const audioUrl = job.data['audioUrl'];
    await downloadAudioUrl(audioUrl);
  }
}
