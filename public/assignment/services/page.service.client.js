(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService($http) {

        var api = {
            "createPage"   : createPage,
            "findPagesByWebsiteId" : findPagesByWebsiteId,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };
        return api;
        function createPage(websiteId, page, callback) {
            $http
                .post('/api/website/' + websiteId + '/page', page)
                .success(callback);

        }
        function findPagesByWebsiteId(websiteId, callback) {
            $http
                .get('/api/website/' + websiteId + '/page')
                .success(callback);
        }
        function findPageById(pageId, callback) {
            $http
                .get('/api/page/' + pageId)
                .success(callback);
        }
        function updatePage(pageId, page, callback) {
            $http
                .put('/api/page/' + pageId, page)
                .success(callback);
        }
        function deletePage(pageId, callback) {
            $http
                .delete('/api/page/' + pageId)
                .success(callback);
        }
    }
})();