(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = "456";
        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);
        }
        init();
    }
    function NewWebsiteController() {
        var vm = this;
        vm.userId = $routeParams["userId"];

        vm.newWebsite = newWebsite;

        function newWebsite() {
            var addWebsite = { _id: "", name: vm.website.name,    developerId: userId, description: vm.website.description};
            WebsiteService.createWebsite(userId, addWebsite);
        }
    }
    function EditWebsiteController($routeProvider, WebsiteService) {
        var vm = this;
        vm.websiteId = $routeProvider.websiteId;
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.websiteId, website);
        }
        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }
})();