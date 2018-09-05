(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("NewWidgetController", NewWidgetController)
        .controller("EditWidgetController", EditWidgetController);

    function WidgetListController($routeParams, WidgetService) {
        console.log("hello widgetlistcontroller");
        var vm = this;
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.setUrl = setUrl;

        function init() {
            console.log("hello entering widgetlistcontroller init");
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

    function NewWidgetController($routeParams, WidgetService, $location) {
        console.log("entering new widget controllers");
        var vm = this;
        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];

        vm.init = init;
        vm.handleType = handleType;
        vm.initNewWidget = initNewWidget;

        var newWidget = {};
        newWidget = {"widgetType": "undefined", "pageId": vm.pageId};

        function init() {
            console.log("entering newwidgetcontroller init");

        }
        init();

        function initNewWidget(type) {
            console.log("hello entering initnewwidget type is " + type);
            newWidget.widgetType = handleType(type);
            console.log("create new widget type " + newWidget.widgetType);
            WidgetService.createWidget(vm.pageId, newWidget, callback);
            function callback(response) {
                console.log("hello init new widget callback");
                newWidget._id = response;
                console.log("hello new widget id is " + newWidget._id);
                vm.widgetId = newWidget._id;
                console.log("hello new widget id is " + vm.widgetId);
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.widgetId);
            }
        }

        function handleType(type) {
            console.log("hello handle type given type is " + type);
            switch(type) {
                case 1:
                    console.log("new heading widget");
                    return "HEADING";
                case 2:
                    console.log("new image widget");
                    return "IMAGE";
                case 3:
                    console.log("new youtube widget");
                    return "YOUTUBE";
            }
        }

    }

    function EditWidgetController($routeParams, WidgetService) {
        console.log("hello editwidgetcontroller");
        console.log("widget id is " + $routeParams["wgid"]);
        var vm = this;
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.widgetId = $routeParams["wgid"];
        vm.widget = {};

        function init() {
            console.log("hello edit widget controller init");
            WidgetService.findWidgetById(vm.widgetId, callback);
            function callback(response) {
                console.log("hello edit widget controller callback");
                vm.current = {};
                vm.current = response;
                console.log("response type is " + response.widgetType);
                console.log("vm.current type is " + vm.current.widgetType);
                switch(vm.current.widgetType) {
                    case "HEADING":
                        console.log("edit widget type is heading");
                        vm.widget.text = vm.current.text;
                        vm.widget.size = vm.current.size;
                        break;
                    case "IMAGE":
                        console.log("edit widget type is image");
                        vm.widget.url = vm.current.url;
                        vm.widget.width = vm.current.width;
                        break;
                    case "YOUTUBE":
                        console.log("edit widget type is youtube");
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