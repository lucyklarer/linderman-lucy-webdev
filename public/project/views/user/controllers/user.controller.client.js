(function() {

    angular
        .module("AquaRegia")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController)
        .controller("FollowersController", FollowersController)
        .controller("FollowingController", FollowingController)
        .controller("EditProfileController", EditProfileController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login() {
            console.log("logging in as " + vm.user.username);
            var findUser = UserService.findUserByCredentials(vm.user.username, vm.user.password);
            if(findUser!==null) {
                console.log("logged in " + findUser.username);
                $location.url("/user/" + findUser._id);
            } else {
                vm.alert = "Unable to login " + vm.user.username;
                console.log("couldn't log in as " + vm.user.username);
            }
        }
    }

    function RegisterController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function register(username, password) {
            var addUser = {_id: "", username: username, password: password, displayName: "", email: ""};
            UserService.createUser(addUser);
            console.log("created user " + username);
            console.log("new user id is " + UserService.findUserByUsername(username)._id);
            $location.url("/user/" + UserService.findUserByUsername(username)._id);
        }
    }

    function ProfileController($routeParams, UserService, $location) {
        console.log("hello profilecontroller");
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.user = {};
        vm.userId = $routeParams["uid"];
        console.log("userId is " + vm.userId);

        function init() {
            console.log("hello profilecontroller init");
            vm.current = UserService.findUserById(vm.userId);
            vm.user.username = vm.current.username;
            vm.user.email = vm.current.email;
            vm.user.displayName = vm.current.displayName;
        }
        init();
    }

    function FollowersController() {

    }

    function FollowingController() {

    }

    function EditProfileController($routeParams, UserService, $location) {
        console.log("hello editprofilecontroller");
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.user = {};
        vm.userId = $routeParams["uid"];
        console.log("userId is " + vm.userId);
        vm.updateProfile = updateProfile;

        function init() {
            console.log("hello profilecontroller init");
            vm.current = UserService.findUserById(vm.userId);
            vm.user.username = vm.current.username;
            vm.user.email = vm.current.email;
            vm.user.displayName = vm.current.displayName;
        }
        init();

        function updateProfile() {
            updateUser = {_id: vm.userId, username: vm.user.username, password: vm.user.password, displayName: vm.user.displayName, email: vm.user.email};
            UserService.updateUser(vm.userId, updateUser);
            console.log("updated user " + vm.user.username);
        }
    }
})();