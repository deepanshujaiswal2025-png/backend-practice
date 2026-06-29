const http = require('http');

http.createServer((req, res) => {
    console.log(req.url)
    res.end('Hello world')
}).listen(3000, () => {
    console.log('This server runs at port 3000')
})
