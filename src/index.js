const http = require('http');
const port = process.env.PORT || 80;

const requestHandler = (request, response) => {
  response.end('Hello World!20240926');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});