import * as fs from 'node:fs/promises';

async function createFile(pathname){
    await fs.writeFile(pathname, 'Hello Node.js\n')
    await fs.appendFile(pathname, 'Hello Javascript!!\n')
    console.log("File created successfully!");
}
createFile('./hello.txt');
