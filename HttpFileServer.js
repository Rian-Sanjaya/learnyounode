const http = require('http');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer( (req, res) => {
    res.end('Hello from server.');
});

server.listen(port, (err) => {
    if (err) return console.error('Error: ', err);
    console.log(`Server is listening on ${port}`);
});