const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json'); 
    response.setHeader('Powered-By','NodeJs');

    const { method, url } = request;

    if(url === '/') {
        
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : 'Halaman homepage'
            }));
        } else {
    
            response.statusCode = 400;
            response.end(JSON.stringify({
                message : `Halaman tidak dapat di akses dengan method ${method}`
            }));
        }

    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : 'Halaman tidak ditemukan'
        }));
    }
};


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});