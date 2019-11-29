const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var FfmpegCommand = require('fluent-ffmpeg');
FfmpegCommand.setFfmpegPath(ffmpegPath);
const {videoName, videoNames, startTimeArr, endTimeArr} = require('./Config');

console.log('：：：：开始处理切片操作：：：：\n');
videoNames.forEach((name, index)=>{
    const startTime = startTimeArr[index];
    const duration = getDuration(startTime, endTimeArr[index]);
    FfmpegCommand(`./VideoAddLogo/${videoName}`)
        .setStartTime(startTime)
        .setDuration(duration)
        .output(`./output/${name}.mp4`)
        .on('start', function () {
            console.log('----start----')
        })
        .on('end', function () {
            console.log('----end----')
        })
        .on('error', function(err){
            console.log(err);
        }).run();
});

function getDuration(startTime, endTime) {
    const startArr = startTime.split(':');
    const endArr = endTime.split(':');
    const start = startArr[0]*60*60+startArr[1]*60+(+startArr[2]);
    const end = endArr[0]*60*60+endArr[1]*60+(+endArr[2]);
    return end-start;
}