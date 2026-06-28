const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "html",), {}, (err) => {
    console.log('Directory created');
})

fs.writeFile(path.join(__dirname, "html", "sample.txt"), "hello world", (err) => {
    console.log('Written');
})

fs.appendFile(path.join(__dirname, "html", "sample.txt"), "\nhello world 2", (err) => {
    console.log('Written');
})

fs.readFile(path.join(__dirname, "html", "sample.txt"), "utf8", (err, content) => {
    console.log(content);
})
