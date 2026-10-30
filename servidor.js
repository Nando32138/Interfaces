// servidor.js: entrega los archivos de la carpeta al navegador
const http = require('http');
const fs = require('fs');
const tipos = { 'html': 'text/html', 'css': 'text/css', 'js': 'text/javascript' };

http.createServer((req, res) => {
    const ruta = '.' + req.url;
    fs.readFile(ruta, (error, d) => {
        if (error) { res.writeHead(404); return res.end('NO encontrado: ' + ruta); }
        const extension = ruta.split('.')[2];
        res.writeHead(200, { 'Content-Type': (tipos[extension] || 'text/plain') + '; charset=utf-8' });
        res.end(datos);
    });
}).listen(8080, () => console.log('Abrir http://localhost:3000/app1/'));