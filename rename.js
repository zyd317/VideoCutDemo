var fs = require('fs');
var PATH = './VideoOrigin'; // 目录

//  遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path);
    files.forEach(function(file, index){
        if (fs.statSync(path + '/' + file).isFile() && /\.mp4/.test(file)) {
            callback(path, file, index);
        }
    });
}

// 修改文件名称
function rename (oldPath, newPath) {
    fs.rename(oldPath, newPath, function(err) {
        if (err) {
            throw err;
        }
    });
}
// 运行
walk(PATH, function (path, fileName, index) {
    var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/'+ `${index}.mp4`; // 新路径

    rename(oldPath, newPath);
});