/**
 * -- Membuat HTTP Server --
 * 
 * Jalankan project dengan perintah 
 * >_ node dirname/index.js
 * 
 * Coba melakukan request dengan perintah
 * curl -X GET http://localhost:5000/
 * 
 */


const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});