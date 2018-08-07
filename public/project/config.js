(function() {
    angular
        .module("AquaRegia", ['ngRoute'])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/profile/edit", {
                templateUrl: "views/user/templates/profile-edit.view.client.html",
                controller: "EditProfileController",
                controllerAs: "model"
            })
            .when("/followers", {
                templateUrl: "views/user/templates/followers.view.client.html",
                controller: "FollowersController",
                controllerAs: "model"
            })
            .when("/following", {
                templateUrl: "views/user/templates/following.view.client.html",
                controller: "FollowingController",
                controllerAs: "model"
            })
            .when("/SearchResults", {
                templateUrl:"views/search/templates/search-results.view.client.html",
                controller: "SearchResultsController",
                controllerAs: "model"
            })
            .when("/workDetails", {
                templateUrl: "views/work/templates/work-details.view.client.html",
                controller: "WorkDetailsController",
                controllerAs: "model"
            })
            .when("/creatorDetails", {
                templateUrl: "views/creator/templates/creator-details.view.client.html",
                controller: "CreatorDetailsController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/user/:uid/followers", {
                templateUrl: "views/user/templates/followers.view.client.html",
                controller: "FollowersController",
                controllerAs: "model"
            })
            .when("/user/:uid/following", {
                templateUrl: "views/user/templates/following.view.client.html",
                controller: "FollowingController",
                controllerAs: "model"

            })
            .when("/user/:uid/edit", {
                templateUrl: "views/user/templates/profile-edit.view.client.html",
                controller: "EditProfileController",
                controllerAs: "model"

            })
            .when("/creator", {
                templateUrl: "views/creator/templates/creator-list.view.client.html",
                controller: "CreatorController",
                controllerAs: "model"

            })
            .when("/creator/add", {
                templateUrl: "views/creator/templates/creator-add.view.client.html",
                controller: "AddCreatorController",
                controllerAs: "model"

            })
            .when("/creator/:cid", {
                templateUrl: "views/creator/templates/creator-details.view.client.html",
                controller: "CreatorDetailsController",
                controllerAs: "model"

            })
            .when("/creator/:cid/edit", {
                templateUrl: "views/creator/templates/creator-edit.view.client.html",
                controller: "EditCreatorController",
                controllerAs: "model"

            })
            .when("/creator/:cid/save", {
                templateUrl: "views/creator/templates/creator-save.view.client.html",
                controller: "SaveCreatorController",
                controllerAs: "model"

            })
            .when("/creator/:cid/share", {
                templateUrl: "views/creator/templates/creator-share.view.client.html",
                controller: "ShareCreatorController",
                controllerAs: "model"

            })
            .when("/search", {
                templateUrl:"views/search/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"

            })
            .when("/search/advanced", {
                templateUrl:"views/search/templates/search-advanced.view.client.html",
                controller: "AdvancedSearchController",
                controllerAs: "model"

            })
            .when("/search/:sid", {
                templateUrl:"views/search/templates/search-results.view.client.html",
                controller: "SearchResultsController",
                controllerAs: "model"

            })
            .when("/work", {
                templateUrl: "views/work/templates/work-list.view.client.html",
                controller: "WorkController",
                controllerAs: "model"

            })
            .when("/work/add", {
                templateUrl: "views/work/templates/work-add.view.client.html",
                controller: "AddWorkController",
                controllerAs: "model"

            })
            .when("/work/:wid", {
                templateUrl: "views/work/templates/work-details.view.client.html",
                controller: "WorkDetailsController",
                controllerAs: "model"

            })
            .when("/work/:wid/edit", {
                templateUrl: "views/work/templates/work-edit.view.client.html",
                controller: "EditWorkController",
                controllerAs: "model"

            })
            .when("/work/:wid/save", {
                templateUrl: "views/work/templates/work-save.view.client.html",
                controller: "SaveWorkController",
                controllerAs: "model"

            })
            .when("/work/:wid/share", {
                templateUrl: "views/work/templates/work-share.view.client.html",
                controller: "ShareWorkController",
                controllerAs: "model"

            })
            .otherwise({
                templateUrl: "views/home/templates/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })
    }
})();