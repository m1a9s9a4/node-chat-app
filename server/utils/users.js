class Users {
    constructor () {
        this.users = [];
    }

    addUser ({id, name, room}) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUserById (id) {
        var user = this.getUserById(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUserById (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserListByRoom (room) {
        var users = this.users.filter((user) => user.room === room);
        var nameArray = users.map((user) => user.name);

        return nameArray;
    }
}

module.exports = {Users};