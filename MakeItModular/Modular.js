const fs = require('fs');

const modular = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);
        ext = '.' + ext;
        const filteredFiles = files.filter( file => file.slice(file.indexOf(ext)) === ext );
        return callback(null, filteredFiles);
    });
};

module.exports = modular;