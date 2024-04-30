const { createServer } = require('node:http');

const port = 12345;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port);
