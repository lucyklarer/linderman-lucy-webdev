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

    }

    function RegisterController(UserService, $location) {

    }

    function ProfileController($routeParams, UserService, $location) {

    }

    function FollowersController() {

    }

    function FollowingController() {

    }

    function EditProfileController() {

    }
})();