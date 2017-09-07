(function() {
    console.log("loaded services");

    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    console.log("made it this far");

    function LoginController($location, UserService) {
        console.log("entering login controller");

        var vm = this;
        vm.login = login;

        function login() {
            console.log("logging in as " + vm.user.username);
            var findUser = UserService.findUserByCredentials(vm.user.username, vm.user.password);
            if(findUser!==null) {
                console.log("logged in " + findUser.username);
                $location.url("/user/" + findUser._id);
                console.log($location.url());
                console.log($location.path());
            } else {
                vm.alert = "Unable to login " + vm.user.username;
                console.log("couldn't log in as " + vm.user.username);
            }
        }
    }

    console.log("and here we are");

    function RegisterController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function register(username, password) {
            var addUser = {_id: "", username: username, password: password, firstName: "", lastName: ""};
            UserService.createUser(addUser);
            console.log("created user " + username);
            console.log("new user id is " + UserService.findUserByUsername(username)._id);
            $location.url("/user/" + UserService.findUserByUsername(username)._id);
            console.log($location.path());
        }
    }

    console.log("now we're here");

    function ProfileController($routeParams, UserService, $location) {
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.user = {};
        vm.userId = $routeParams["uid"];
        console.log("userId is " + vm.userId);
        vm.updateProfile = updateProfile;

        function init() {
            vm.current = UserService.findUserById(vm.userId);
            vm.user.username = vm.current.username;
            vm.user.email = vm.current.email;
            vm.user.firstName = vm.current.firstName;
            vm.user.lastName = vm.current.lastName;
            vm.user.password = vm.current.password;
        }
        init();

        function updateProfile() {
            updateUser = {_id: vm.userId, username: vm.user.username, password: vm.user.password, firstName: vm.user.firstName, lastName: vm.user.lastName};
            UserService.updateUser(vm.userId, updateUser);
            console.log("updated user " + vm.user.username);
        }
    }
    console.log("started at the top now we here");
})();