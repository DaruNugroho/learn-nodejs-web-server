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