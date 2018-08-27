module.exports = function(app) {

    var pages =
        [
            { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
        ];

    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function createPage(req, res) {
        var newPage = req.body;
        pages.push(newPage);
        res.json(pages);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        console.log("hello findAllPagesForWebsite webid is " + websiteId);
        var websitePages = [];
        var index;
        for(index = 0; index < pages.length; index++) {
            if(pages[index].websiteId === websiteId) {
                websitePages.push(pages[index]);
            }
        }
        res.json(websitePages);
    }

    function findPageById(req, res) {
        var id = req.params.pageId;
        var index;
        for(index = 0; index < pages.length; index++) {
            if(pages[index]._id === id) {
                res.json(pages[index]);
            }
        }

    }

    function updatePage(req, res) {
        var id = req.params.pageId;
        var index;
        for(index = 0; index < pages.length; index++) {
            if(pages[index]._id === id) {
                pages[index] = req.body;
            }
        }
        res.json(pages);
    }

    function deletePage(req, res) {
        var id = req.params.pageId;
        var index;
        for(index = 0; index < pages.length; index++) {
            if(pages[index]._id === id) {
                pages.splice(index, 1);
            }
        }
        res.json(pages);
    }


};