(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("NewPageController", NewPageController)
        .controller("EditPageController", EditPageController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];


        function init() {
            console.log("hello page list init");
            PageService.findPagesByWebsiteId(vm.websiteId, callback);
            function callback(response) {
                vm.pages = response;
            }
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
            PageService.createPage(vm.websiteId, addPage, callback);
            function callback(response) {
                console.log('hello new page callback ' + response);
            }
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
            console.log("hello edit page init");
            PageService.findPageById(vm.pageId, callback);
            vm.current = {};
            function callback(response) {
                console.log('hello init editpagecontroller callback');
                vm.current = response;
                console.log("curent pageId is " + vm.pageId);
                console.log("current page is " + vm.current.name);
                vm.page.name = vm.current.name;
                vm.page.title = vm.current.description;
            }

        }
        init();

        function updatePage() {
            updatePage = { _id: vm.pageId, name: vm.page.name, websiteId: vm.websiteId, description: vm.page.title};
            PageService.updatePage(vm.pageId, updatePage, callback);
            function callback(response) {
                console.log('hello updatepage callback ' + response);
                vm.pages = response;
            }
        }
        function deletePage() {
            PageService.deletePage(vm.pageId, callback);
            function callback(response) {
                console.log('hello deletepage callback ' + response);
                vm.pages = response;
            }
        }
    }
})();