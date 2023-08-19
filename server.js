const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is your server!\n');
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server is running on port 8080');
});
