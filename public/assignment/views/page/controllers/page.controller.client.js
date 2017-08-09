(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        console.log("entering page list controller");
        var vm = this;
        //vm.websiteId = $routeParams["websiteId"];
        vm.websiteId = "456";
        console.log("website id is " + vm.websiteId);
        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
        }
        init();
    }

    function NewPageController($routeParams, PageService) {
        var vm = this;
        vm.page = {};
        //vm.websiteId = $routeParams["websiteId"];
        vm.newPage = newPage;

        function newPage() {
            var addPage = { _id: "000", name: vm.page.name, websiteId: "456", description: vm.page.title};
            PageService.createPage(vm.websiteId, addPage)
        }
    }
    function EditPageController($routeParams, PageService) {
        var vm = this;
        vm.page = {};
        vm.pageId = $routeParams["pageId"];
        vm.websiteId = $routeParams["websiteId"];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();

        function updatePage() {
            updatePage = { _id: vm.pageId, name: vm.page.name, websiteId: vm.websiteId, description: vm.page.title};
            PageService.updatePage(vm.pageId, updatePage)
        }
        function deletePage() {
            PageService.deletePage(vm.pageId);
        }
    }
})();