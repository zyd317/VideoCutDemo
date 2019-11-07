const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var FfmpegCommand = require('fluent-ffmpeg');
FfmpegCommand.setFfmpegPath(ffmpegPath);

const originVideo = '【聖誕節🎅】 鯊魚一家都愛吃糖🍭 鯊魚寶寶喜歡吃甜的Baby Shark  +更多合輯 _ 兒童卡通動畫 _ 幼兒音樂歌曲 _ 兒歌 _ 童謠 _ 動畫片 _ 卡通片 _ 寶寶巴士 _ 奇奇-EdxogCbQ6xE.mp4';
const videoNameStart = ['test11']; // 生成后的视频名字
const startTimeArr = ['00:00:09']; // 视频开始时间
const endTimeArr = ['00:02:03']; // 视频结束时间

startTimeArr.forEach((startTime, index)=>{
    const duration = getDuration(startTime, endTimeArr[index]);
    FfmpegCommand(`./video2/${originVideo}`)
        .setStartTime(startTime)
        .setDuration(duration)
        .output(`./output/${videoNameStart[index]}.mp4`)
        .on('end', function(err) {
            if(!err) {
                console.log('conversion Done');
            }
            console.log('end');
        })
        .on('error', function(err){
            console.log(err);
        }).run();
});

function getDuration(startTime, endTime) {
    const startArr = startTime.split(':');
    const endArr = endTime.split(':');
    const start = startArr[0]*60*60+startArr[1]*60+startArr[2];
    const end = endArr[0]*60*60+endArr[1]*60+endArr[2];
    return end-start;
}