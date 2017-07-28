(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService() {
        var users =
            [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];
        var api = {
            "createUser"   : createUser,
            "findUserById" : findUserById,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser
    };
        return api;
        function createUser(user) {
            var exist = findUserByUsername(user.username);
            if(!exist) {
                user._id = (users.length + 1).toString();
                user.firstName = "";
                user.lastName = "";
                users.push(user)
            }
        }
        function findUserById(id) {
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id == id) {
                    return users[i];
                }
            }
        }
        function findUserByUsername(username) {
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i].username == username) {
                    return users[i];
                }
            }
        }
        function findUserByCredentials(username, password) {
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i].username == username && users[i].password == password) {
                    return users[i];
                }
            }
        }
        function updateUser(userID, user) {
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id == userID) {
                    users[i] = user;
                }
            }
        }
        function deleteUser(userID) {
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id == userID) {
                    users.splice(i, 1);
                }
            }
        }
    }
})();