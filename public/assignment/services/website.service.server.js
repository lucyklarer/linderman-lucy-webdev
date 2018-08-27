module.exports = function(app) {

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

    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res) {
        console.log('createwebsite hello server side');
        var newWebsite = req.body;
        console.log('createwebsite new website is ' + newWebsite);
        websites.push(newWebsite);
        res.json(websites);
    }

    function findAllWebsitesForUser(req, res) {
        var devId = req.params.userId;
        console.log("hello findAllWebsitesForUser devid is " + devId);
        var userWebsites = [];
        var index;
        for(index = 0; index < websites.length; index++) {
            if(websites[index].developerId === devId) {
                userWebsites.push(websites[index]);
            }
        }
        res.json(userWebsites);
    }

    function findWebsiteById(req, res) {
        console.log('hello findwebsitebyid');
        var id = req.params.websiteId;
        console.log('websiteid is ' + id);
        console.log('id is ' + id);
        var index;
        for(index = 0; index < websites.length; index++) {
            if(websites[index].developerId === id) {
                res.json(websites[index]);
            }
        }
    }

    function updateWebsite(req, res) {
        console.log('hello updatewebsite server side');
        var id = req.params.websiteId;
        console.log('websiteid is ' + id);
        var index;
        for(index = 0; index < websites.length; index++) {
            if(websites[index].developerId === id) {
                websites[index] = req.body;
            }
        }
        res.json(websites);
    }

    function deleteWebsite(req, res) {
        console.log('hello deletewebsite server side');
        var id = req.params.websiteId;
        console.log('websiteid is ' + id);
        var index;
        for(index = 0; index < websites.length; index++) {
            if(websites[index].developerId === id) {
                websites.splice(index, 1);
            }
        }

        res.json(websites);
    }


};