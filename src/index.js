import ffmpeg from 'fluent-ffmpeg';

// FFmpeg ijro fayli yo'lini qo'lda o'rnating (agar kerak bo'lsa)
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe'); // Windows
// Linux yoki MacOS uchun:
// ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');

// Audio faylni matnga aylantirish
const inputFile = './input_audio.wav'; // Kiruvchi audio fayl
const outputFile = './output_audio.mp3'; // Chiquvchi audio fayl

// Audio faylni formatini o'zgartirish
ffmpeg(inputFile)
  .output(outputFile)
  .on('end', () => {
    console.log('Audio fayli muvaffaqiyatli o\'zgartirildi:', outputFile);
  })
  .on('error', (err) => {
    console.error('Xatolik yuz berdi:', err.message);
  })
  .run();
