const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'test1',
            room: 'room test 1'
        }, {
            id: 2,
            name: 'test2',
            room: 'room test 2'
        }, {
            id: 3,
            name: 'test3',
            room: 'room test 1'
        }];
    });

    it('should add new user', () => {
        var users = new Users;
        var user = {
            id: 123,
            name: 'Tester',
            room: 'test Office'
        };
        var resUser = users.addUser(user);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userId = 1;
        var user = users.removeUserById(userId);
        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = 99;
        var user = users.removeUserById(userId);
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should return user', () => {
        var user = users.getUserById(2);
        expect(user).toEqual({id: 2, name: 'test2', room: 'room test 2'});
    });

    it('should not return user', () => {
        var user = users.getUserById(99);
        expect(user).toBeUndefined();
    });
    
    it('should return names for room test 1', () => {
        var userList = users.getUserListByRoom('room test 1');
        expect(userList).toEqual(['test1', 'test3']);
    });
})