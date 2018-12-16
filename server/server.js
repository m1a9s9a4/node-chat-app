const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) callback('表示名と部屋名は必須項目です。');

        socket.join(params.room);
        users.removeUserById(socket.id);
        users.addUser({id: socket.id, name: params.name, room: params.room});

        io.to(params.room).emit('updateUserList', users.getUserListByRoom(params.room));
        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name}さんが参加しました。`));
        callback();
    });

    socket.on('createMessage', (message, callback) => {
        var user = users.getUserById(socket.id);
        if (user && isRealString(message.text)) {
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
        }
        callback("from server");
    });

    socket.on('createLocationMessage', (coords) => {
        var user = users.getUserById(socket.id);
        if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
        }
    });

    socket.on('disconnect', () => {
        var user = users.removeUserById(socket.id);

        if (user) {
            io.to(user.room).emit('updateUserList', users.getUserListByRoom(user.room));
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name}が退出しました。`));
        }
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});