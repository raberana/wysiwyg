import * as express from 'express';
import * as webSocket from 'ws';
import * as http from 'http';
import * as url from 'url';
import generateNumber from './number.generator';

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4201');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get('/api/title', (req, res) => {
  res.send({ message: 'CACIB TECHTALK' });
});

const server = http.createServer(app);

////////////////
// Setup websocket
////////////////
const wss = new webSocket.Server({ server });

var broadcast = () => {
  wss.clients.forEach((client) => {
    client.send(generateNumber());
  });
}

setInterval(broadcast, 3000);

////////////////
// Start server
////////////////
server.listen(3000, () => {
  console.log('Listening on %d', server.address().port);
});

module.exports = server;