const { spawn } = require('child_process');
var path = require('path');
const {videoName} = require('./Config');
const originPath = path.join('./output', videoName);
const overLaypath = path.join('./VideoOverLay', videoName);
const clearTopLogo = `ffmpeg -i ${originPath} -b:v 548k -vf delogo=x=21:y=7:w=132:h=152 ${overLaypath}`;
const clearBottomLogo = `ffmpeg -i ${originPath} -b:v 548k -vf delogo=x=21:y=563:w=132:h=152:show=0 ${overLaypath}`;
const command = clearTopLogo;
console.log('：：：：开始处理去水印操作：：：：\n', command);

const args = command.split(' ');
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
