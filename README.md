# VideoCutDemo

## install
npm i @ffmpeg-installer/ffmpeg
npm i fluent-ffmpeg
brwe install ffmpeg // TODO 去和加水印没找到node版本的，先使用命令行处理水印

## start
- 去水印：在overLay.js输入videoName需要去水印的文件名 `node overLay.js`
- 加水印：在logoAdd.js输入videoName需要加水印的文件名 `node logoAdd.js`
- 将处理好的视频切片：在index.js中配置originVideo原视频名称 -> videoNames 每个切片的视频名称 -> startTimeArr切片开始的时间 -> endTimeArr切片结束的时间 
```
const videoNameStart = ['test11']; // 生成后的视频名字
const startTimeArr = ['00:00:09']; // 视频开始时间
const endTimeArr = ['00:02:03']; // 视频结束时间
```