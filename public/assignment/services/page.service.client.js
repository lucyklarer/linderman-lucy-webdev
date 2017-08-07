(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {
        var pages =
            [
                { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
                { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
                { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
            ];
        var api = {
            "createPage"   : createPage,
            "findPagesByWebsiteId" : findPagesByWebsiteId,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };
        return api;
        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            page._id = (pages.length + 1).toString();
            pages.push(page);
        }
        function findPagesByWebsiteId(websiteId) {
            var i;
            var listPages;
            for (i = 0; i < pages.length; i++) {
                if (pages[i].websiteId === websiteId) {
                    listPages.push(pages[i]);
                }
            }
            return listPages;
        }
        function findPageById(pageId) {
            var i;
            for (i = 0; i < pages.length; i++) {
                if (pages[i]._id === pageId) {
                    return pages[i];
                }
            }
            return null;
        }
        function updatePage(pageId, page) {
            var i;
            for (i = 0; i < pages.length; i++) {
                if (pages[i]._id === pageId) {
                    pages[i] = page;
                }
            }
        }
        function deletePage(pageId) {
            var i;
            for (i = 0; i < pages.length; i++) {
                if (pages[i]._id === pageId) {
                    pages.splice(i, 1);
                }
            }
        }
    }
})();