import { createWriteStream } from 'fs';
import { join } from 'path';
import Axios from 'axios';

export const downloadAudioUrl = async (audioUrl) => {
  const fileName = 'audio-' + Date.now() + '.mp3';
  const path = join(__dirname, fileName);

  console.log('path.. ', path);

  // axios image download with response type "stream"
  const response = await Axios({
    method: 'GET',
    url: audioUrl,
    responseType: 'stream',
    onDownloadProgress: function (e) {
      console.log('Download progress.. ', e);
    },
  });

  // pipe the result stream into a file on disc
  const writer = createWriteStream(path);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', () => {
      console.log('download end');
      resolve('success');
    });

    writer.on('error', (err) => {
      console.log('download error', err);
      reject();
    });
  });
};
