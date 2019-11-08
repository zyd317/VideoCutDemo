var childProcess = require('child_process');
var path = require('path');
const videoName = '坐上小火車去郊遊.mp4';
const filePath = path.join('./video2', videoName);
const filePath2 = path.join('./output', videoName);
const addTopLogo = `ffmpeg -y -i ${filePath} -vf "movie='./logo.png' [watermark];[in][watermark] overlay=21:7 [out]" ${filePath2}`;
const addBottomLogo = `ffmpeg -y -i ${filePath} -vf "movie='./logo.png' [watermark];[in][watermark]  overlay=21:563 [out]" ${filePath2}`;

const command = addTopLogo;
console.log(command);
childProcess.execSync(command, {maxBuffer: 5000 * 1024}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});