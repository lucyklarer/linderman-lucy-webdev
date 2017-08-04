(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites =
            [
                { "_id":"123", "name":"Facebook", "developerId":"456", "description":"Lorem" },
                { "_id": "234", "name": "Twitter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];
        var api = {
            "createWebsite"   : createWebsite,
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite
        };
        return api;
        function createWebsite(userId, website) {
            website.developerId = userId;
            website._id = (websites.length + 1).toString();
            websites.push(website);
            console.log("adding website " + website.name);
        }
        function findWebsitesByUser(userId) {
            var i;
            var userWebsites;
            userWebsites = null;
            for (i = 0; i < websites.length; i++) {
                if (websites[i].developerId === userId) {
                    console.log("found website " + websites[i].name);
                    userWebsites.add(websites[i]);
                }
            }
            console.log("couldn't find websites");
            return userWebsites;
        }
        function findWebsiteById(websiteId) {
            var i;

            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    console.log("found website " + websites[i].name);
                    return websites[i];
                }
            }

            console.log("couldn't find website");
            return null;
        }
        function updateWebsite(websiteId, website) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    websites[i] = website;
                    console.log("updated website " + websites[i].name);
                    return;
                }
            }
            console.log("couldn't update website");
        }
        function deleteWebsite(websiteId) {
            var i;
            for (i = 0; i < websites.length; i++) {
                if (websites[i]._id === websiteId) {
                    websites.splice(i, 1);
                    console.log("deleted website " + websiteId);
                    return;
                }
            }
            console.log("couldn't delete website");
        }
    }
})();