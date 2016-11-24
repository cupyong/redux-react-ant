var path = require('path');
var express = require('express');
var app = new express();

var port = 9000;

console.log(path.join(__dirname, '../../build'))
app.use(express.static(path.join(__dirname, '../../build')));


app.get("/*", function(req, res) {
    return res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, function(err) {
    if (err) {
        connsole.error(err)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
