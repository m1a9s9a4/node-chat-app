var socket = io();

socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');                
});

socket.on('newMessage', function (email) {
    console.log('new message', email);
});

socket.on('userJoin', function (message) {
    console.log('userJoin', message);
});

socket.on('newUser', function (message) {
    console.log('newUser', message);
});