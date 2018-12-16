var expect = require('expect');

var {generateMessage} = require('./message');

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