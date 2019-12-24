
// @ts-ignore
const http = require('http');
// @ts-ignore
const server =http.createServer();
const url = require('url');
const path =require('path');
const fs=require('fs');
server.on("request",(req:any,res:any)=>{
    //获取请求路劲
    let pathname=url.parse(req.url).pathname;
    // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    //将请求路劲转为实际路径
    // res.end(path.join(__dirname,`public${pathname}`));

    //读取文件
    fs.readFile(path.join(__dirname,`public${pathname}`),(err:any,result:any)=> (err!=null)?  res.end('读取失败'):  res.end(result));

});

server.listen(3000);
console.log('网站服务器启动成功');


