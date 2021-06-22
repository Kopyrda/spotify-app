const http = require('http');
const fs = require('fs').promises;
if (true) {let a = 5};

const server = http.createServer();
server.on('request', (req, res) => {
    switch (req.url) {
        case '/main':
            fs.readFile('./main.html')
            .then((file) => {
                res.setHeader('content-type', 'text/html');
                res.write(file.toString());
                res.end();
            });
            break;

        case '/spotify-baran-favicon.png':
            console.log('requesting favicon');
            fs.readFile('./spotify-baran-favicon.png')
            .then((image) => {
                //res.setHeader('content-type', 'image/jpeg');
                res.write(image);
                res.end();
            }); 
            break;

        case '/style.css':
            fs.readFile('./style.css')
                .then((style) => {
                    console.log('reading style');
                    //res.setHeader('content-type', 'text/css');
                    res.write(style);
                    res.end();
                })
            break;
        default:
            break;
    }
});

server.listen(2121);