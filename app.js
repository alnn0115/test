const http = require('http');
const server = http.createServer((req, res) => {
    res.end('/index.html');
})
server.listen(5000);