/**
 * -- Body Request --
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

    const { method } = request;

    response.statusCode = 200;

    if(method === 'GET') {
        response.end(`Method : GET di panggil\n`);
    }

    
    if(method === 'POST') {
        let body = [];
        
        request.on('data', (potonganData) => {
             body.push(potonganData);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body); // Convert string JSON ke dalam Javascript Objek

            response.end(`Hai, ${name}!`);
        });
    }
    
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});