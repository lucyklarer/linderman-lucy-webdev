(function() {

    angular
        .module("AquaRegia")
        .controller("HomeController", HomeController);

    function HomeController($location) {
        console.log("hello " + $location.url())
    }

})();