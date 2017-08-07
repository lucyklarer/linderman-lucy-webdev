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
        //vm.userId = $routeParams["userId"];

        vm.userId = "456";

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        vm.newWebsite = newWebsite;

        function newWebsite() {
            var addWebsite = { _id: "", name: vm.model.website.name,    developerId: userId, description: vm.model.website.description};
            WebsiteService.createWebsite(userId, addWebsite);
        }
    }
    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = "456";
        //vm.userId = $routeParams["userId"];
        vm.websiteId = $routeParams["websiteId"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.websiteId, website);
        }
        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }
})();