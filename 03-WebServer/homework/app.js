const http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/') { //Si la URL es / devolvemos el HTML
        res.writeHead(200, { 'Content-Type': 'text/html' })
        var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        var nombre = 'Soy Henry'
        html = html.replace('{nombre}', nombre)
        res.end(html);
    }
    if (req.url === '/api') { //Si la URL es /api devolvemos el objeto
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var obj = {
            nombre: 'Juan',
            apellido: 'Perez'
        };
        res.end(JSON.stringify(obj));
    } else{
        res.writeHead(404); //Ponemos el status del response a 404: Not Found
        res.end(); //No devolvemos nada más que el estado.
        }
}).listen(1337, '127.0.0.1');