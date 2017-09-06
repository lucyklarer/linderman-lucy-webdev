(function() {
    console.log("loaded services");

    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    console.log("made it this far");

    function LoginController($location, UserService) {
        console.log("reached login page");
        var vm = this;
        console.log("set view model");
        vm.login = login;
        console.log("set login function");

        function init() {
            vm.users = UserService.users;
        }
        init();

        function login() {
            console.log("logging in as " + vm.user.username);
            var findUser = UserService.findUserByCredentials(vm.user.username, vm.user.password);
            if(findUser!==null) {
                console.log("logged in " + findUser.username);
                $location.url("/user/" + findUser._id);
            } else {
                vm.alert = "Unable to login " + vm.user.username;
            }
        }
    }

    console.log("and here we are");

    function RegisterController(UserService) {
        var vm = this;
        vm.register = register;

        function register(user) {
            UserService.createUser(user);
        }
    }

    console.log("now we're here");

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.userId = $routeParams["userId"];
        console.log("userId is " + vm.userId);
        vm.password = $routeParams["password"];
        vm.username = $routeParams["username"];
        vm.firstName = $routeParams["firstName"];
        vm.lastName = $routeParams["lastName"];
        vm.updateProfile = updateProfile;

        function init() {
            vm.current = UserService.findUserById(vm.userId);
            vm.user.username = vm.current.username;
            vm.user.email = vm.current.email;
            vm.user.firstName = vm.current.firstName;
            vm.user.lastName = vm.current.lastName;
        }
        init();

        function updateProfile() {
            updateUser = {_id: userId, username: vm.username, password: vm.password, firstName: vm.firstName, lastName: vm.lastName};
            UserService.updateUser(userId, updateUser);
        }
    }
    console.log("started at the top now we here");
})();