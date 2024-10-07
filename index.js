const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url == '/dashboard') {

    res.end(fs.readFileSync('./dashboard.html'));

  } else if (req.url == '/settings') {
    
    res.end(fs.readFileSync('./settings.html'));

  } else if (req.url == '/') {

    res.end(fs.readFileSync('./home.html'));

  } else if (req.url == '/user') {

    res.end(fs.readFileSync('./user.html'));

  } else {

    res.end(fs.readFileSync('./404.html'))

  }

});

server.listen(1234, () => {
  console.log('Hey bro! you\'re server is on http://localhost:1234')
});