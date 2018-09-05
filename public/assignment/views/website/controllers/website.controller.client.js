(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("EditWebsiteController", EditWebsiteController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams["uid"];
        console.log("userId is " + vm.userId);
        vm.websites = {};

        function init() {
            console.log("hello website list controller init");
            WebsiteService.findWebsitesByUser(vm.userId, callback);
            function callback(response) {
                vm.websites = response;
            }
        }
        init();
    }

    function NewWebsiteController(WebsiteService, $routeParams) {
        var vm = this;
        vm.websites = {};
        vm.website = {};
        vm.userId = $routeParams["uid"];

        vm.newWebsite = newWebsite;

        function init() {
            console.log("hello new website controller init");
            WebsiteService.findWebsitesByUser(vm.userId, callback);
            function callback(response) {
                vm.websites = response;
            }
        }
        init();

        function newWebsite() {
            var addWebsite = { _id: "", name: vm.website.name, developerId: vm.userId, description: vm.website.description};
            WebsiteService.createWebsite(vm.userId, addWebsite, callback);
            function callback(response) {
                console.log('hello new website callback');
                vm.websites = response;
            }
        }
    }

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.websites = {};
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.website = {};


        function init() {
            console.log("hello edit website init");
            WebsiteService.findWebsitesByUser(vm.userId, websitesCallback);
            function websitesCallback(response) {
                vm.websites = response;
                console.log("user has " + vm.websites.length + " websites");
            }

            WebsiteService.findWebsiteById(vm.websiteId, editWebsiteCallback);
            function editWebsiteCallback(response) {
                vm.current = response;
                console.log("current website is " + vm.current.name);
                vm.website.name = vm.current.name;
                vm.website.description = vm.current.description;
            }
        }
        init();

        function updateWebsite() {
            console.log("updating website " + vm.website.name);
            console.log("userID is " + vm.userId);
            console.log('vm website name is ' + vm.website.name);
            console.log('vm website description is ' + vm.website.description);
            var update = {"_id": vm.websiteId, "name": vm.website.name, "developerId": vm.userId, "description": vm.website.description};
            console.log('update should be ' + update.toString());
            WebsiteService.updateWebsite(vm.websiteId, update, callback);
            function callback(response) {
                console.log('hello updatewebsite callback ' + response);
                vm.websites = response;
                init();
            }
        }

        function deleteWebsite() {
            console.log('hello vm website is ' + vm.website);
            console.log('hello vm website id is ' + vm.websiteId);
            WebsiteService.deleteWebsite(vm.websiteId, callback);
            function callback(response) {
                console.log('hello deleteWebsite callback ' + response);
                vm.websites = response;
                init();
            }
        }
    }
})();