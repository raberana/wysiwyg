import * as express from 'express';
import * as webSocket from 'ws';
import * as http from 'http';
import * as url from 'url';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = http.createServer(app);
const wss = new webSocket.Server({ server });

wss.on('connection', (ws: webSocket, req: http.IncomingMessage) => {
  const location = url.parse(req.url, true);
  
  ws.on('message', (message: webSocket.Data) => {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(3000, () => {
  console.log('Listening on %d', server.address().port);
});

module.exports = server;