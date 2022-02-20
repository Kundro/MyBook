const express = require('express');
const app = express();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const io = require('socket.io')(http);

//css
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/registration', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('F:/Papka/MyBook/index.html');
});

app.get('/registration', function(req, res){
    res.sendFile('F:/Papka/MyBook/registration.html');
});

app.listen(3000, function(){
    console.log('Listening on http://localhost:3000');
}); 