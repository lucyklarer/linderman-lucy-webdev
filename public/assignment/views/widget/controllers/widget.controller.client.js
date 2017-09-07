(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.setUrl = setUrl;

        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        }
        init();

        function setUrl(widget) {
            console.log("setting url");
            switch(widget.widgetType) {
                case "YOUTUBE":
                    console.log("display youtube");
                    var element = document.getElementById("youtubeurl");
                    element.setAttribute("src", widget.url);
                    break;
                case "IMAGE":
                    console.log("display image");
                    var element = document.getElementById("imageurl");
                    element.setAttribute("src", widget.url);
                    break;
            }
        }
    }
    function NewWidgetController($routeParams, WidgetService) {
        console.log("entering new widget controller");
        var vm = this;
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.widgetId = $routeParams["wgid"];

    }

    function EditWidgetController($routeParams, WidgetService) {
        console.log("entering widget editor");
        var vm = this;
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.widgetId = $routeParams["wgid"];
        vm.widget = {};
        console.log("widget id is " + vm.widgetId);
        function init() {
            vm.current = WidgetService.findWidgetById(vm.widgetId);
            console.log("widget type is " + vm.current.widgetType);
            switch(vm.current.widgetType) {
                case "HEADING":
                    console.log("switching to heading");
                    vm.widget.text = vm.current.text;
                    console.log("text should be " + vm.widget.text);
                    vm.widget.size = vm.current.size;
                    console.log("size should be " + vm.widget.size);
                    break;
                case "IMAGE":
                    console.log("switching to image");
                    vm.widget.url = vm.current.url;
                    vm.widget.width = vm.current.width;
                    break;
                case "YOUTUBE":
                    console.log("switching to youtube");
                    vm.widget.url = vm.current.url;
                    vm.widget.width = vm.current.width;
                    break;
            }
        }
        init();

        function updateWidget() {
            console.log("entering update widget");
            var update = {};
            switch(vm.current.widgetType) {
                case "HEADING":
                    update = {"_id": vm.current._id, "widgetType": "HEADING", "pageId": vm.pageId, "size": vm.widget.size, "text": vm.widget.text};
                    break;
                case "IMAGE":
                    update = { "_id": vm.current._id, "widgetType": "IMAGE", "pageId": vm.pageId, "width": vm.widget.width, "url": vm.widget.url};
                    break;
                case "YOUTUBE":
                    update = { "_id": vm.current._id, "widgetType": "YOUTUBE", "pageId": vm.pageId, "width": vm.widget.width,
                        "url": vm.widget.url};
                    break;
            }
            console.log("updating widget");
            WidgetService.updateWidget(vm.widgetId, update);
        }
        function deleteWidget() {
            console.log("deleting widget " + vm.widgetId);
            WidgetService.deleteWidget(vm.widgetId);
        }
    }
})();