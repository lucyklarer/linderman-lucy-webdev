(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites =
            [
                { _id: "123", name: "Facebook",    developerId: "456", description: "Lorem" },
                { _id: "234", name: "Tweeter",     developerId: "456", description: "Lorem" },
                { _id: "456", name: "Gizmodo",     developerId: "456", description: "Lorem" },
                { _id: "890", name: "Go",          developerId: "123", description: "Lorem" },
                { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
                { _id: "678", name: "Checkers",    developerId: "123", description: "Lorem" },
                { _id: "789", name: "Chess",       developerId: "234", description: "Lorem" }
            ];
        var api = {
            "createWebsite"   : createWebsite,
            "findWebsiteByUser" : findWebsiteByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite
        };
        return api;
        function createWebsite(userId, website) {
            website.developerId = userId;
            website._id = (websites.length + 1).toString();
            websites.push(website);
            log.console("adding website " + website.name);
        }
        function findWebsiteByUser(userId) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i].developerId === userId) {
                    log.console("found website " + websites[i].name);
                    return websites[i];
                }
            }
            log.console("couldn't find website");
        }
        function findWebsiteById(websiteId) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    log.console("found website " + websites[i].name);
                    return websites[i];
                }
            }
            log.console("couldn't find website");
        }
        function updateWebsite(websiteId, website) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    websites[i] = website;
                    log.console("updated website " + websites[i].name);
                    return;
                }
            }
            log.console("couldn't update website");
        }
        function deleteWebsite(websiteId) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    websites.splice(i, 1);
                    log.console("deleted website " + websiteId);
                    return;
                }
            }
            log.console("couldn't delete website");
        }
    }
})();