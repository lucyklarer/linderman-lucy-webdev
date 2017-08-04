(function() {
    console.log("loaded services");

    angular
        .module("WebAppMaker")
        .controller("LoginControl", LoginControl)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    console.log("made it this far");

    //function LoginController($location, UserService) {
        /*var vm = this;
        vm.login = login;

        function login(user) {
            var findUser = UserService.findUserByCredentials(user.username, user.password);
            if(findUser!==null) {
                $location.url("/user/" + findUser._id);
            } else {
                vm.alert = "Unable to login";
            }
        }*/
    //}

    function LoginControl() {}


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
    console.log("started at the top now we here");
})();