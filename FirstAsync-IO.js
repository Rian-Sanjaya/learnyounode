// Write a program that uses a single asynchronous filesystem operation to  
// read a file and print the number of newlines it contains to the console  
// (stdout), similar to running cat file | wc -l

const fs = require('fs');

const filePath = process.argv[2];

if (filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log(data.split('\n').length - 1);
    })
}