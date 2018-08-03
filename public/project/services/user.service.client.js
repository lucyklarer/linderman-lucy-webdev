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
                {_id: "000", username: "jacerethal", email: "stratosphere@jace.rqnd", displayName: "Jace"},
                {_id: "001", username: "addaxdawn", email: "hardwonpeace@addax.rqnd", displayName: "Addax"},
                {_id: "002", username: "noble_quartz", email: "acereporter@jamil.rqnd", displayName: "Jamil Q-N"},
                {_id: "003", username: "godlove", email: "orth@kingdomcome.lda", displayName: "Orth"}
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

        }

        function findUserById(userID) {

        }

        function findUserByUsername(username) {

        }

        function findUserByCredentials(username, password) {

        }

        function updateUser(userID, user) {

        }

        function deleteUser(userID) {

        }

        return api;
    }
})();
