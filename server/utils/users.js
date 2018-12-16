class Users {
    constructor () {
        this.users = [];
    }

    addUser ({id, name, room}) {
        if (this.getUserByName(name)) {
            return null;
        }
        var user = {id, name, room}
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

    getUserByName (name) {
        return this.users.filter((user) => user.name === name)[0];
    }

    getUserListByRoom (room) {
        var users = this.users.filter((user) => user.room === room);
        var nameArray = users.map((user) => user.name);

        return nameArray;
    }
}

module.exports = {Users};