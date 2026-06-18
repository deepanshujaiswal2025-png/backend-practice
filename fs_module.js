import * as fs from 'node:fs';

function createFile(pathname){
    fs.writeFileSync(pathname, "Hello, Node.js!!");
    fs.appendFileSync(pathname, "Hello, Javascript!!"); //overwrites
    console.log("File created successfully!");
}
createFile('./hello.txt');
