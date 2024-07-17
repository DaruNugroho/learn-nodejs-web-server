/**
 * -- Method/Verb Request --
 * 
 * Jalankan project dengan perintah 
 * >_ node dirname/index.js
 * 
 * Untuk melakukan uji coba request dengan perintah berikut
 * 
 * curl -X POST http://localhost:5000
 * curl -X PUT http://localhost:5000
 * curl -X DELETE http://localhost:5000
 * curl -X GET http://localhost:5000
 * 
 */


const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method, host } = request;

    response.statusCode = 200;

    if(method === 'GET') {
        response.end(`Method : GET di panggil\n`);
    }

    
    if(method === 'POST') {
        response.end(`Method : POST di panggil\n`);
    }


    if(method === 'PUT') {
        response.end(`Method : PUT di panggil\n`);
    }


    if(method === 'DELETE') {
        response.end(`Method : DELETE di panggil\n`);
    }
    
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});