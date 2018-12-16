const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var input = 1111;
        var rslt = isRealString(input);
        expect(rslt).toBeFalsy();

        var input = true;
        var rslt = isRealString(input);
        expect(rslt).toBeFalsy();
    });

    it('should reject only spaces', () => {
        var input = "   ";
        var rslt = isRealString(input);
        expect(rslt).toBeFalsy();  
    });

    it('should reject no values', () => {
        var input = "";
        var rslt = isRealString(input);
        expect(rslt).toBeFalsy();  
    });

    it('should allow string with non-space characters', () => {
        var input = "  test  ";
        var rslt = isRealString(input);
        expect(rslt).toBeTruthy();  
    });
});