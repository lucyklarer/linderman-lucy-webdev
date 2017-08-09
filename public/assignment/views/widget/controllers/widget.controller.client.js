(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        //vm.pageId = $routeParams["pageId"];
        vm.pageId = "321";
        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        }
        init();
    }
    function NewWidgetController() { }

    function EditWidgetController($routeParams, WidgetService) {
        var vm = this;
        //vm.widgetId = $routeParams["widgetId"];
        vm.widgetId = "123";
        vm.widget = {};
        function init() {
            vm.current = WidgetService.findWidgetById(vm.widgetId);
            switch(vm.current.widgetType) {
                case "HEADING":
                    vm.widget.text = vm.current.text;
                    vm.widget.size = vm.current.size;
                    break;
                case "IMAGE":
                    vm.widget.url = vm.current.url;
                    vm.widget.width = vm.current.width;
                    break;
                case "YOUTUBE":
                    vm.widget.url = vm.current.url;
                    vm.widget.width = vm.current.width;
                    break;
            }
        }
        init();

        function editWidget() {

        }
    }
})();