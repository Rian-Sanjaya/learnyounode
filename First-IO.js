// Write a program that uses a single synchronous filesystem operation to  
// read a file and print the number of newlines (\n) it contains to the  
// console (stdout), similar to running cat file | wc -l

const fs = require('fs');

const filePath = process.argv[2];

if (filePath) {
    const content = fs.readFileSync(filePath);
    const lines = content.toString().split('\n').length - 1;
    console.log(lines);
}
