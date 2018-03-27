const express = require('express');
const path = require('path');
const app = new express();
const mcache = require('memory-cache');
app.use(express.static(path.join(__dirname,'public')));

app.listen(8088,function () {
    console.log('云渲染平台服务启动');
});
