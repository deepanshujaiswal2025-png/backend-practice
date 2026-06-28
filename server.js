import http from 'node:http';

const server= http.createServer((req,res)=>{
    console.log("Starting server...");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Hello, Node.js!!</h1>");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

