(function() {

    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    function LoginController($location, UserService) {
        console.log('hello entering login controller');
        var vm = this;
        vm.login = login;

        function login() {
            console.log("logging in as " + vm.user.username);
            UserService.findUserByCredentials(vm.user.username, vm.user.password, callback);
            function callback(response) {
                console.log('hello login callback');
                if(response!==null) {
                    console.log("logged in " + response.username);
                    $location.url("/user/" + response._id);
                } else {
                    vm.alert = "Unable to login " + vm.user.username;
                    console.log("couldn't log in as " + vm.user.username);
                }
            }
        }
    }

    function RegisterController(UserService, $location) {
        //TODO does not currently check if username already exists
        console.log("hello entering register controller");
        var vm = this;
        vm.register = register;

        function register(username, password) {
            console.log("registering username " + username);
            var addUser = {_id: "", username: username, password: password, firstName: "", lastName: ""};
            UserService.createUser(addUser, callback);
            function callback(response) {
                console.log('hello register controller callback');
                console.log('response is ' + response);
                $location.url("/login");
            }


        }
    }

    function ProfileController($routeParams, UserService, $location) {
        console.log('hello profile controller');
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.user = {};
        vm.userId = $routeParams["uid"];
        console.log("userId is " + vm.userId);
        vm.updateProfile = updateProfile;

        function init() {
            console.log("hello profile init");
            UserService.findUserById(vm.userId, callback);
            vm.current = {};
            function callback(response) {
                vm.current = response;
                console.log("hello init callback response, vm.current is " + vm.current);
                //currently printing [object Object]
                console.log("init callback response, vm.current.username is " + vm.current.username);
                vm.user.username = vm.current.username;
                vm.user.email = vm.current.email;
                vm.user.firstName = vm.current.firstName;
                vm.user.lastName = vm.current.lastName;
                vm.user.password = vm.current.password;
            }

        }
        init();

        function updateProfile() {
            //TODO fix: "updated user undefined"
            console.log("hello update profile");
            var updateUser = {_id: vm.userId, username: vm.user.username, password: vm.user.password, firstName: vm.user.firstName, lastName: vm.user.lastName, email: vm.user.email};
            UserService.updateUser(vm.userId, updateUser, callback);
            function callback(response) {
                console.log("hello updateprofile entering callback");
                console.log("response is " + response);
            }
            console.log("updated user " + vm.user.username);
        }
    }
})();