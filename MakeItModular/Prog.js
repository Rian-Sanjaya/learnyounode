const modular = require('./Modular');

const dir = process.argv[2];
const ext = process.argv[3];
const arrList = (err, datas) => {
    if (err) return console.error('There was an error: ', err);
    datas.forEach( data => console.log(data) );
};

if (dir) modular(dir, ext, arrList);