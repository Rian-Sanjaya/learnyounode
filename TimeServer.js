const net = require('net');

const portNumber = process.argv[2];

const zeroFill = (num) => {
    return (num < 10 ? '0' : '') + num;
}

const now = () => {
    const d = new Date();
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes()); 
};

const server = net.createServer( (socket) => {
    // console.log('Client connected.');
    socket.end(now() + '\n');
});

server.listen(Number(portNumber), () => console.log('Server is listening.'));