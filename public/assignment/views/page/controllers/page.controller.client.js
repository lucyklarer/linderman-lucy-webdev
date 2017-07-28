(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = $routeParams["websiteId"];
        function init() {
            //vm.pages = PageService.findPagesByWebsiteId(websiteId);
            vm.pages = PageService.pages;
        }
        init();
    }

    function NewPageController() {
        var vm = this;
        vm.websiteId = $routeParams["websiteId"];
        vm.newPage = newPage;

        function newPage() {
            addPage = { _id: "", name: vm.page.name, websiteId: "456", description: vm.page.title}
            PageService.createPage(websiteId, addPage)
        }
    }
    function EditPageController($routeParams, PageService) {
        var vm = this;
        vm.pageId = $routeParams["pageId"];
        vm.websiteId = $routeParams["websiteId"];
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();

        function updatePage() {
            updatePage = { _id: pageId, name: vm.page.name, websiteId: websiteId, description: vm.page.title};
            PageService.updatePage(pageId, updatePage)
        }
        function deletePage() {
            PageService.deletePage(pageId);
        }
    }
})();