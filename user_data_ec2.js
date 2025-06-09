#!/bin/bash
yum update -y
curl -sL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs
cat <<EOF > app.js
const http = require('http');
const PORT = 80;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Halo dari EC2 instance!');
}).listen(PORT);
EOF
node app.js &
