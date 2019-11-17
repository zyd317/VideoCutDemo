const { spawn } = require('child_process');
var path = require('path');
const {videoName} = require('./Config');
const originPath = path.join('./VideoOverLay', videoName);
const addLogoPath = path.join('./VideoAddLogo', videoName);
const addTopLogo = ['-y', '-i', originPath, '-vf', "movie='./logo.png' [watermark];[in][watermark] overlay=21:7 [out]", addLogoPath];
const addBottomLogo = ['-y', '-i', originPath, '-vf', "movie='./logo.png' [watermark];[in][watermark] overlay=21:563 [out]", addLogoPath];
const command = addTopLogo;
console.log('：：：：开始处理去添加水印操作：：：：\n', 'ffmpeg ', command.join(' '));

const ffmpeg = spawn('ffmpeg', command);

ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
ffmpeg.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
ffmpeg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});