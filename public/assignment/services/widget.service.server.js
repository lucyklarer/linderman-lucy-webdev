module.exports = function(app) {

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

    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);

    function createWidget(req, res) {
        console.log("hello server side create widget current # widgets is " + widgets.length);
        var newWidget = req.body;
        var id = (widgets.length + 1).toString();
        newWidget._id = id;
        console.log("server side new widget id is " + newWidget._id);
        console.log("new widget type is " + newWidget.widgetType);
        widgets.push(newWidget);
        console.log("server side widgets length is " + widgets.length);
        res.json(id);
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        console.log("hello findAllWidgetsForPage pageId is " + pageId);
        var pageWidgets = [];
        var index;
        for(index = 0; index < widgets.length; index++) {
            if(widgets[index].pageId === pageId) {
                pageWidgets.push(widgets[index]);
            }
        }
        res.json(pageWidgets);
    }

    function findWidgetById(req, res) {
        console.log("hello server side find widget by id");
        var id = req.params.widgetId;
        console.log("given id is " + id);
        var index;
        for(index = 0; index < widgets.length; index++){
            if(widgets[index]._id === id) {
                console.log("found widget by id type is " + widgets[index].widgetType)
                res.json(widgets[index]);
            }
        }
    }

    function updateWidget(req, res) {
        var id = req.params.widgetId;
        var index;
        for(index = 0; index < widgets.length; index++){
            if(widgets[index]._id === id) {
                widgets[index] = req.body;
            }
        }
        res.json(widgets);
    }

    function deleteWidget(req, res) {
        var id = req.params.widgetId;
        var index;
        for(index = 0; index < widgets.length; index++){
            if(widgets[index]._id === id) {
                widgets.splice(index, 1);
            }
        }
        res.json(widgets);
    }


};