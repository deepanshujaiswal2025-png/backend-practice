const url = require('url');

let myUrl = new URL("http://campusx.in:5000/index.php?id=5&msg=error");

console.log(myUrl);

console.log('\n---\n');

console.log(myUrl.hostname);
console.log(myUrl.root);
console.log(myUrl.href);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);
console.log(myUrl.searchParams.id);

