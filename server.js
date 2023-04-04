const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('login', (username) => {
    console.log(username + ' logged in');
    socket.join(username);
  });

  socket.on('message', (message) => {
    console.log('message: ' + message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected
