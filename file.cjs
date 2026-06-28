const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "html",), {}, (err) => {
    console.log('Directory created');
})


