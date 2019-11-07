const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var FfmpegCommand = require('fluent-ffmpeg');
FfmpegCommand.setFfmpegPath(ffmpegPath);

const originVideo = '【聖誕節🎅】 鯊魚一家都愛吃糖🍭 鯊魚寶寶喜歡吃甜的Baby Shark  +更多合輯 _ 兒童卡通動畫 _ 幼兒音樂歌曲 _ 兒歌 _ 童謠 _ 動畫片 _ 卡通片 _ 寶寶巴士 _ 奇奇-EdxogCbQ6xE.mp4';
const videoNameStart = ['小朋友如果糖果🍬太辣了怎么办呢', '小朋友你睡觉前刷牙了吗🦷', '小朋友我们一起来唱这个糖果🍬歌哟', '如果糖果很辣你就吐吐舌👅']; // 生成后的视频名字
const startTimeArr = ['00:00:08', '00:02:51', '00:04:58', '00:08:35']; // 视频开始时间
const endTimeArr = ['00:02:49', '00:04:56', '00:06:21', '00:10:40']; // 视频结束时间

startTimeArr.forEach((startTime, index)=>{
    const duration = getDuration(startTime, endTimeArr[index]);
    FfmpegCommand(`./video2/${originVideo}`)
        .setStartTime(startTime)
        .setDuration(duration)
        .addOption([
            '-vcodec libx264',
            '-c:a aac',
            '-bufsize 3000k'
        ])
        .complexFilter([
            "scale=300:300[rescaled]",
            {
                filter:"pad",options:{w:"600",h:"300"},
                inputs:"rescaled",outputs:"padded"
            },
            {
                filter:"overlay", options:{x:"300",y:"0"},
                inputs:["padded","vid2.mp4"],outputs:"output"
            }
        ], 'output')
        .output(`./output/${videoNameStart[index]}.mp4`)
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
    const start = startArr[0]*60*60+startArr[1]*60+startArr[2];
    const end = endArr[0]*60*60+endArr[1]*60+endArr[2];
    return end-start;
}

function getDuration(startTime, endTime) {
    const startArr = startTime.split(':');
    const endArr = endTime.split(':');
    const start = startArr[0]*60*60+startArr[1]*60+startArr[2];
    const end = endArr[0]*60*60+endArr[1]*60+endArr[2];
    return end-start;
}