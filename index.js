const express = require('express')
const app = express();
var fs = require('fs');
var sourceRouter = require('./router/source');
const port = 80


app.set("Access-Control-Allow-Origin", "*");
app.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
app.set("Access-Control-Allow-Headers", "X-Requested-With");
app.set('Access-Control-Allow-Headers', 'Content-Type');

app.get('/', (req, res) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    // //允许的header类型
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    // //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 可以带cookies
    res.header("Access-Control-Allow-Credentials", true);
    fs.readFile(__dirname + '/index.html', (err, data) => {
        // console.log(data);
        res.write(data.toString());
        res.end();
    });
});
app.use('/source', sourceRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));