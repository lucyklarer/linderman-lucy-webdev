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
            WidgetService.findWidgetsByPageId(vm.pageId, callback);
            function callback(response) {
                vm.widgets = response;
            }

        }
        init();

        function setUrl(widget) {
            var element;
            switch(widget.widgetType) {
                case "YOUTUBE":
                    console.log("display youtube");
                    element = document.getElementById("youtubeurl");
                    element.setAttribute("src", widget.url);
                    break;
                case "IMAGE":
                    console.log("display image");
                    element = document.getElementById("imageurl");
                    element.setAttribute("src", widget.url);
                    break;
            }
        }
    }
    function NewWidgetController($routeParams, WidgetService) {
        console.log("entering new widget controllers");
        var vm = this;
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];

        vm.init = init;
        vm.handleType = handleType;

        var newWidget = {};
        newWidget = {"widgetType": ""};

        function init() {
            WidgetService.createWidget(vm.pageId, newWidget, callback);
            function callback(response) {
                vm.widgets = response;
            }
        }
        init();

        function handleType(type) {
            switch(type) {
                case 1:
                    newWidget.widgetType = "HEADING";
                    break;
                case 2:
                    newWidget.widgetType = "IMAGE";
                    break;
                case 3:
                    newWidget.widgetType = "YOUTUBE";
                    break;
            }
        }

    }

    function EditWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.widgetId = $routeParams["wgid"];
        vm.widget = {};
        function init() {
            WidgetService.findWidgetById(vm.widgetId, callback);
            function callback(response) {
                vm.current = response;
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
            WidgetService.updateWidget(vm.widgetId, update, callback);
            function callback(response) {
                console.log('hello updatewidget callback');
                vm.widgets = response;
            }
        }

        function deleteWidget() {
            console.log("deleting widget " + vm.widgetId);
            WidgetService.deleteWidget(vm.widgetId, callback);
            function callback(response) {
                console.log('hello deleteWidget callback');
                vm.widgets = response;
            }
        }
    }
})();