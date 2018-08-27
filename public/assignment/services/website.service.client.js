(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService($http) {

        var api = {
            "createWebsite"   : createWebsite,
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite
        };
        return api;
        function createWebsite(userId, website, callback) {
            console.log('hello create website given userid is ' + userId);
            $http
                .post('/api/user/' + userId + '/website', website)
                .success(callback);
        }
        function findWebsitesByUser(userId, callback) {
            console.log('hello findwebsitesbyuser given userid  is ' + userId);
            $http
                .get('/api/user/' + userId + '/website')
                .success(callback);
        }
        function findWebsiteById(websiteId, callback) {
            console.log('hello findwebsitebyid id is ' + websiteId);
            $http
                .get('/api/website/' + websiteId)
                .success(callback);
        }
        function updateWebsite(websiteId, website, callback) {
            console.log('hello updateWebsite id is ' + websiteId);
            $http
                .put('/api/website/' + website)
                .success(callback);
        }
        function deleteWebsite(websiteId, callback) {
            console.log('hello deleteWebsite id is ' + websiteId);
            $http
                .delete('/api/website/' + websiteId)
                .success(callback);
        }
    }
})();