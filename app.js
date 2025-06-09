const http = require('http');
const PORT = 80;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Halo dari Web Server EC2!');
}).listen(PORT, () => console.log(`Server running on port ${PORT}`));
