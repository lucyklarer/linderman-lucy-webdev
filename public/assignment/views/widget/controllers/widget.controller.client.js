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
        vm.widgetId = $routeParams["widgetId"];
        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
            switch(vm.widget.widgetType) {
                case "HEADING":
                    vm.model.widget.text = vm.widget.text;
                    vm.model.widget.size = vm.widget.size;
                    break;
                case "IMAGE":
                    vm.model.widget.url = vm.widget.url;
                    vm.model.widget.width = vm.widget.width;
                    break;
                case "YOUTUBE":
                    vm.model.widget.url = vm.widget.url;
                    vm.model.widget.width = vm.widget.width;
                    break;
            }
        }
        init();

        function editWidget() {

        }
    }
})();