(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        console.log("entering page list controller");
        var vm = this;
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        console.log("website id is " + vm.websiteId);
        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
        }
        init();
    }

    function NewPageController($routeParams, PageService) {
        var vm = this;
        vm.page = {};
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.newPage = newPage;

        function newPage() {
            var addPage = { _id: "", name: vm.page.name, websiteId: vm.websiteId, description: vm.page.title};
            PageService.createPage(vm.websiteId, addPage)
        }
    }
    function EditPageController($routeParams, PageService) {
        var vm = this;
        vm.page = {};
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.current = PageService.findPageById(vm.pageId);
            console.log("curent pageId is " + vm.pageId);
            console.log("current page is " + vm.current.name);
            vm.page.name = vm.current.name;
            vm.page.title = vm.current.description;
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