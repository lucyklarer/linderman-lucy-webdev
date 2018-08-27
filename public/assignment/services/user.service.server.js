module.exports = function(app) {

    var users =
        [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

    app.post('/api/user', createUser);
    app.get('/api/user/:userId', findUserById);
    app.get('/api/user?username=username', findUserByUsername);
    app.get('/api/user?username=username&password=password', findUserByCredentials);
    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);

    app.get('/api/user', function(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username!==undefined && password!==undefined) {
            console.log('valid username and password, ' + username + ', ' + password);
            findUserByCredentials(req, res);
        } else if(username!==undefined) {
            console.log('valid username ' + username);
            findUserByUsername(req, res);
        }
    });


    function createUser(req, res) {
        console.log("hello user service server side create user");
        var newUser = req.body;
        users.push(newUser);
        res.json(users);

    }

    function findUserById(req, res) {
        console.log("hello user service server side find user by id");
        var id = req.params.userId;
        console.log('req params: ' + req.params);
        console.log('req id: ' + req._id);
        console.log('req: ' + req);
        console.log('hello id is ' + id);
        var index;
        for (index = 0; index < users.length; index++) {
            console.log('index ' + index + ', username is ' + users[index].username + ', id is ' + users[index]._id);
            if (users[index]._id === id) {
                console.log('hello id matches');
                res.json(users[index]);
            }
        }

    }

    function findUserByUsername (req, res) {
        console.log("hello user service server side find user by username");
        var username = req.query.username;
        console.log('searching for username ' + username);
        var i;
        for (i = 0; i < users.length; i++) {
            console.log('index ' + i + ', username is ' + users[i].username);
            if (users[i].username === username) {
                res.json(users[i]);
            }
        }
    }

    function findUserByCredentials (req, res) {
        console.log("hello user service server side find user by credentials");
        var username = req.query.username;
        var password = req.query.password;
        console.log('username is ' + username + ', password is ' + password);
        var i;
        for (i = 0; i < users.length; i++) {
            console.log('checking user ' + i + ', username is ' + users[i].username);
            if (users[i].username === username && users[i].password === password) {
                console.log("found user by credentials");
                res.json(users[i]);
            }
        }
    }

    function deleteUser (req, res) {
        console.log("hello user service server side delete user");
        var id = req.params.userId;
        var index;
        for(index = 0; index < users.length; index++) {
            if(users[index]._id === id) {
                console.log('found id match');
                users.splice(index, 1);
            }
        }

        res.json(users);
    }

    function updateUser(req, res) {
        console.log("hello user service server side update user");
        var id = req.params.userId;
        var index;
        for(index = 0; index < users.length; index++) {
            if(users[index]._id === id) {
                console.log('found id match');
                users[index] = req.body;
            }
        }

        res.json(users);
    }


};