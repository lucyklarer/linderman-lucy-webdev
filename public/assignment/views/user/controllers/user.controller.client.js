(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(user) {
            user = UserService.findUserByCredentials(user.username, user.password);
            if(user) {
                $location.url("/user/" + user._id);
            } else {
                vm.alert = "Unable to login";
            }
        }
    }
    function RegisterController($routeParams, UserService) {
        var vm = this;
        vm.register = register;

        function register(user) {
            UserService.createUser(user);
        }
    }
    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams["userId"];
        vm.password = $routeParams["password"];
        vm.updateProfile = updateProfile;

        function init() {
            vm.user = UserService.findUserById(vm.userId);
        }
        init();

        function updateProfile() {
            updateUser = {_id: userId, username: vm.user.username, password: vm.password, firstName: vm.user.firstName, lastName: vm.user.lastName};
            UserService.updateUser(userId, updateUser);
        }
    }
})();