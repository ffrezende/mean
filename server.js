const http = require('http');
const app = require('./config/express');

http.createServer(app).listen(3030, () => {
  console.log('Servidor Iniciado');
});

//192.168.99.100
