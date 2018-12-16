var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: "ok"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');                
});

socket.on('newMessage', function (email) {
    console.log('new message', email);
});