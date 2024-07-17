const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method, url } = request;

    if(url === '/') {
        
        if(method === 'GET') {
            response.statusCode = 200; // Memberikan response status jika OK
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }

    }else if(url === '/about') {

        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halaman about</h1>\n');
        }else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
           });
   
           request.on('end', () => {
               body = Buffer.concat(body).toString();
               const { name } = JSON.parse(body);
               response.statusCode = 200;
   
               response.end(`Halo, ${name}! Ini adalah halaman about\n`);
           });

        } else {
            response.statusCode = 400;
            response.end('Halaman tidak dapat diakses dengan <any> request');
        }
    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});