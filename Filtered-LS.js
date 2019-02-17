const fs = require('fs');

const dir = process.argv[2];
const ext = '.' + process.argv[3];

if (dir) {
    fs.readdir(dir, (err, files) => {
        if (err) return console.log(err);
        //const filteredFiles = files.filter( file => file.indexOf(ext) !== -1 );
        //console.log(filteredFiles.join('\n'));
        files.forEach( file => {
            if (file.indexOf(ext) !== -1) console.log(file);
        });
    });
}