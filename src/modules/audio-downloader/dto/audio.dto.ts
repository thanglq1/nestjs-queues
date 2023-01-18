import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class DownloadAudioDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  audioUrl: string;
}
