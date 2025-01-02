const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(302, { 'Location': '/login' }); // Redirect to /login
    res.end();
  } else if (req.url === '/login') {
    fs.readFile('./login.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading login.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
