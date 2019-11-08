const { spawn } = require('child_process');
var path = require('path');
const {videoName} = require('./Config');
const filePath = path.join('./VideoOverLay', videoName);
const filePath2 = path.join('./VideoAddLogo', videoName);
const addTopLogo = `ffmpeg -y -i ${filePath} -vf "movie='./logo.png' [watermark];[in][watermark] overlay=21:7 [out]" ${filePath2}`;
const addBottomLogo = `ffmpeg -y -i ${filePath} -vf "movie='./logo.png' [watermark];[in][watermark]  overlay=21:563 [out]" ${filePath2}`;

const args = addTopLogo.split(' ');
args.shift();
const ffmpeg = spawn('ffmpeg', args);

ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
ffmpeg.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
ffmpeg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});