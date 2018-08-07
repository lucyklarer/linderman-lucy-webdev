(function() {
    angular
        .module("AquaRegia")
        .factory("UserService", UserService);

    function UserService() {
        var users =
            [
                {_id: "000", username: "consolecowboy", email: "sharkboy@therapidevening.org", displayName: "mako"},
                {_id: "001", username: "cass", email: "cassander.timaeus.berence@apostolos.gov", displayName: "cass"},
                {_id: "002", username: "aria_joie", email: "joie@joypark.com", displayName: "Aria"},
                {_id: "003", username: "automated_dynamics", email: "audy@kingdomcome.lda", displayName: "AuDy"},
                {_id: "004", username: "jacerethal", email: "stratosphere@jace.rqnd", displayName: "Jace"},
                {_id: "005", username: "addaxdawn", email: "hardwonpeace@addax.rqnd", displayName: "Addax"},
                {_id: "006", username: "noble_quartz", email: "acereporter@jamil.rqnd", displayName: "Jamil Q-N"},
                {_id: "007", username: "godlove", email: "orth@kingdomcome.lda", displayName: "Orth"}
            ];

        var api = {
            "createUser" : createUser,
            "findUserById" : findUserById,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser
        };

        function createUser(user) {
            console.log("hello create user " + user.username);
            var exist = findUserByUsername(user.username);
            if(exist===null) {
                user._id = (users.length + 1).toString();
                users.push(user);
                console.log("created user " + user.username);
            }
        }

        function findUserById(userID) {
            console.log("hello finduserbyid " + userID);
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id === userID) {
                    console.log("found user " + users[i].username);
                    return users[i];
                }
            }
            console.log("findUserById: could not find user");
            return null;
        }

        function findUserByUsername(username) {
            console.log("hello finduserbyusername " + username);
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    console.log("found user " + users[i]._id);
                    return users[i];
                }
            }
            console.log("findUserByUsername: could not find user");
            return null;
        }

        function findUserByCredentials(username, password) {
            console.log("hello finduserbycredentials " + username);
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    console.log("found user");
                    return users[i];
                }
            }
            console.log("finduserbycredentials: could not find user");
            return null;
        }

        function updateUser(userID, user) {
            console.log("hello update user " + userID);
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id === userID) {
                    users[i] = user;
                }
            }
        }

        function deleteUser(userID) {
            console.log("hello delete user :(");
            console.log("users length is " + users.length);
            var i;
            for (i = 0; i < users.length; i++) {
                if (users[i]._id === userID) {
                    users.splice(i, 1);
                    console.log("deleted user, now users length is " + users.length);
                }
            }
        }

        return api;
    }
})();
