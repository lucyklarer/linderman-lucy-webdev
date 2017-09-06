(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    console.log("website controller");

    function WebsiteListController($routeParams, WebsiteService) {
        console.log("entering websitelistcontroller");
        var vm = this;
        vm.userId = "456";
        console.log("userId is " + vm.userId);
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();
    }
    function NewWebsiteController(WebsiteService) {
        var vm = this;
        vm.website = {};
        //vm.userId = $routeParams["userId"];

        vm.userId = "456";

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        vm.newWebsite = newWebsite;

        function newWebsite() {
            var addWebsite = { _id: "456", name: vm.website.name, developerId: vm.userId, description: vm.website.description};
            WebsiteService.createWebsite(vm.userId, addWebsite);
        }
    }
    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = "456";
        //vm.userId = $routeParams["userId"];
        vm.websiteId = "456";
        //vm.websiteId = $routeParams["websiteId"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.website = {};


        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            console.log("user has " + vm.websites.length + " websites");
            vm.current = WebsiteService.findWebsiteById(vm.websiteId);
            console.log("current website is " + vm.current.name);
            vm.website.name = vm.current.name;
            vm.website.description = vm.current.description;
        }
        init();

        function updateWebsite() {
            console.log("updating website " + vm.website.name);
            console.log("userID is " + vm.userId);
            updateWebsite = {_id: vm.websiteId, name: vm.website.name, developerId: vm.userId, description: vm.website.description};
            WebsiteService.updateWebsite(vm.websiteId, updateWebsite);
        }
        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }
})();