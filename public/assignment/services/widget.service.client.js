(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService() {
        var widgets =
            [
                {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
                {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
                { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://www.youtube.com/embed/Ndlf5_L5gsE" },
                { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ];
        var api = {
            "createWidget"   : createWidget,
            "findWidgetsByPageId" : findWidgetsByPageId,
            "findWidgetById" : findWidgetById,
            "updateWidget" : updateWidget,
            "deleteWidget" : deleteWidget
        };
        return api;
        function createWidget(pageId, widget) {
            widget.pageId = pageId;
            widget._id = (widgets.length + 1).toString();
            widgets.push(widget);
        }
        function findWidgetsByPageId(pageId) {
            console.log("looking for widgets by pageid " + pageId);
            var i;
            var pageWidgets = [];
            for (i = 0; i < widgets.length; i++) {
                if (widgets[i].pageId === pageId) {
                    console.log("current widget belongs to pageid " + widgets[i].pageId);
                    pageWidgets.push(widgets[i]);
                }
            }
            console.log("found " + pageWidgets.length + " widgets");
            return pageWidgets;
        }
        function findWidgetById(widgetId) {
            var i;
            for (i = 0; i < widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    return widgets[i];
                }
            }
            return null;
        }
        function updateWidget(widgetId, widget) {
            var i;
            for (i = 0; i < widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    widgets[i] = widget;
                    console.log("updated widget " + widget._id);
                }
            }
        }
        function deleteWidget(widgetId) {
            var i;
            for (i = 0; i < widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    widgets.splice(i, 1);
                }
            }
        }
    }
})();