# VideoCutDemo

## install
npm i @ffmpeg-installer/ffmpeg
npm i fluent-ffmpeg
brwe install ffmpeg // TODO 去和加水印没找到node版本的，先使用命令行处理水印

## start
- 拉去资源：youtube-dl ${videoPath}
- 去水印：在overLay.js输入videoName需要去水印的文件名 `node overLay.js`
- 加水印：在logoAdd.js输入videoName需要加水印的文件名 `node logoAdd.js`
- 将处理好的视频切片：在index.js中配置originVideo原视频名称 -> videoNames 每个切片的视频名称 -> startTimeArr切片开始的时间 -> endTimeArr切片结束的时间 
```
const videoNameStart = ['test11']; // 生成后的视频名字
const startTimeArr = ['00:00:09']; // 视频开始时间
const endTimeArr = ['00:02:03']; // 视频结束时间
```

## 目录
.
├── VideoOrigin 存放原视频视频
├── VideoOverLay 存放去水印的视频
├── VideoAddLogo 存放加完logo的视频
├── output 存放切片处理完的视频
├── logo.png 存放logo
├── overLay.js 去水印脚本
├── logoAdd.js 加logo
├── index.js 切片
└── rename.js 文件呢批量重命名
