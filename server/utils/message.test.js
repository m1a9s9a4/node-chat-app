var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generage correct message obj', () => {
        var from = 'Masa';
        var text = 'message';
        var message = generateMessage(from, text);

        expect(message.from).toBeDefined();
        expect(message.text).toBeDefined();
        expect(message.createdAt).toBeDefined();
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate a location message obj', () => {
        var from = 'Masa';
        var lat = 35.681236;
        var lng = 139.767125;
        var url = `https://www.google.com/maps?q=${lat},${lng}`;
        var message = generateLocationMessage(from, lat, lng);

        expect(message.from).toBeDefined();
        expect(message.url).toBeDefined();
        expect(message.createdAt).toBeDefined();
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
    });
});