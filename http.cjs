const http = require('http');

http.createServer((req, res) => {
    console.log(req.url)
    res.end('Hello world')
}).listen(4000, () => {
    console.log('This server runs at port 4000')
})
