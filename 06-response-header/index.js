const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method, url } = request;

    if(url === '/') {
        
        if(method === 'GET') {
            response.setHeader('Content-Type', 'application/json'); // Memberikan response header
            response.setHeader('Powered-By','NodeJs');
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }

    }
};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});