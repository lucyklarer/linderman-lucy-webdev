(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            "createUser"   : createUser,
            "findUserById" : findUserById,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser
    };

        function createUser(user, callback) {
            console.log('hello client side create user ' + user);
            $http
                .post('/api/user', user)
                .success(callback);
        }

        function findUserById(id, callback) {
            console.log('hello client side finduserbyid ' + id);
            $http
                .get('/api/user/' + id)
                .success(callback);
        }

        function findUserByUsername(username, callback) {
            console.log('hello client side find user by username ' + username);
            $http
                .get('/api/user?username=' + username)
                .success(callback);
        }

        function findUserByCredentials(username, password, callback) {
            console.log('hello client side find user by credentials ' + username + ', ' + password);
            $http
                .get('/api/user?username=' + username + '&password=' + password)
                .success(callback);
        }

        function updateUser(userID, user, callback) {
            console.log('hello client side update user ' + userID);
            $http
                .put('/api/user/' + userId, user)
                .success(callback);

        }

        function deleteUser(userID, callback) {
            console.log('hello client side delete user ' + userID);
            $http
                .delete('/api/user/' + userID)
                .success(callback);
        }

        return api;
    }
})();