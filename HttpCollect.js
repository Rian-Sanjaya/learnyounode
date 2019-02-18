const http = require('http');
const bl = require('bl');

const url = process.argv[2];

if (url) {
    http.get(url, (res) => {
        // let rawData = '';
        // res.setEncoding('utf8');
        // res.on('error', (e) => console.error(e.message));
        // res.on('data', data => {
        //     // console.log(data);s
        //     rawData += data;
        // });
        // res.on('end', () => {
        //     try {
        //         console.log(rawData.length);
        //         console.log(rawData)
        //     } catch (err) {
        //         console.error(errs);
        //     }
        // });

        res.pipe(bl( (err, data) => {
            if (err) return console.error(err);
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }));
    }).on('error', (e) => console.error(`Got error: ${e.message}s`));
}