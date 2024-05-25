const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`<h1>Hello</h1>
    <h2></h2>`)
    res.end();
})

server.listen(3000, () => {
    console.log("start server");
})