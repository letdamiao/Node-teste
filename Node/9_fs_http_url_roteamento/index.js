const http = require('http')
const fs = require('fs')
const url= require('url')

const PORT = 5000
const server = https.createServer((req, res)=>{
const q = url.parse(req.url, true)
const filename = q.pathname.substring(1)
//index.html
//0 . 1
if(filename.includes('html')){
    if(fs.existsSync(filename)){
        fs.readFile(filename, function(err,data){
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        });

    }
}else{
fs.readeFile('404.html', (err, data)=>{
res.writeHead(404, {'Content-type': 'text/html'})
res.write(data);
return res.end();
});
}
})
server.listen(PORT, ()=>{
console.log("Servidor on" +PORT+'')
});



// atvHttp.js
// atvURL.js
// const http = require('http')
// atividade 01
// código

    