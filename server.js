// import os from 'os';
// console.log(`Running on ${os.platform()} platform`);
import http from 'http';

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is a Node.js server');
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})