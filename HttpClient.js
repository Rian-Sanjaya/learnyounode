const http = require('http');

const url = process.argv[2];

if (url) {
    http.get(url, (res) => {
        // let rawData = '';
        res.setEncoding('utf8');
        res.on('data', data => {
            console.log(data);
            // rawData += data;
        });
        // res.on('end', () => {
        //     try {
        //         console.log(rawData);
        //     } catch (err) {
        //         console.error(err);
        //     }
        // });
        res.on('error', e => console.error(e.message));
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}