var childProcess = require('child_process');
var path = require('path');
const videoName = '坐上小火車去郊遊.mp4';
const filePath = path.join('./video2', videoName);
const filePath2 = path.join('./output', videoName);
const clearTopLogo = `ffmpeg -i ${filePath} -b:v 548k -vf delogo=x=21:y=7:w=132:h=152 ${filePath2}`;
const clearBottomLogo = ` ffmpeg -i ${filePath} -b:v 548k -vf delogo=x=21:y=563:w=132:h=142 ${filePath2}`;

const command = clearTopLogo;
console.log(command);
childProcess.execSync(command, {maxBuffer: 5000 * 1024}, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});