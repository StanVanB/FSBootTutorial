const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Home Page');
    } else if (request.url === '/about') {
        response.end('About Page');
    } else {
        response.end('404 Not Found');
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
