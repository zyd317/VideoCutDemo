var childProcess = require('child_process');
var path = require('path');
const videoName = '【聖誕節🎅】鯊魚一家都愛吃糖🍭鯊魚寶寶喜歡吃甜的BabyShark+更多合輯_兒童卡通動畫_幼兒音樂歌曲_兒歌_童謠_動畫片_卡通片_寶寶巴士_奇奇-EdxogCbQ6xE.mp4';
const filePath = path.join('./VideoOverLay', videoName);
const filePath2 = path.join('./VideoAddLogo', videoName);
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