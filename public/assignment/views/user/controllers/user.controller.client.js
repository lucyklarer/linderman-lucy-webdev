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
            var findUser = UserService.findUserByCredentials(user.username, user.password);
            if(findUser!==null) {
                $location.url("/user/" + findUser._id);
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
        vm.username = $routeParams["username"];
        vm.firstName = $routeParams["firstName"];
        vm.lastName = $routeParams["lastName"];
        vm.updateProfile = updateProfile;

        function init() {
            vm.user = UserService.findUserById(vm.userId);
        }
        init();

        function updateProfile() {
            updateUser = {_id: userId, username: vm.username, password: vm.password, firstName: vm.firstName, lastName: vm.lastName};
            UserService.updateUser(userId, updateUser);
        }
    }
})();