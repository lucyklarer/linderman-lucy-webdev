(function() {
    angular
        .module("AquaRegia")
        .factory("CreatorService", CreatorService);

    function CreatorService() {
        var creators =
            [
                {_id: "000", name: "Guillermo del Toro", status: "active"},
                {_id: "001", name: "Taika Waititi", status: "active"},
                {_id: "002", name: "George Eliot", status: "inactive"},
                {_id: "003", name: "William Shakespeare", status: "inactive"},
                {_id: "004", name: "Glenn Howerton", status: "active"},
                {_id: "005", name: "Ada Palmer", status: "active"}

            ];

        var api = {
            "createCreator" : createCreator,
            "findCreatorById" : findCreatorById,
            "findCreatorByName" : findCreatorByName,
            "updateCreator" : updateCreator,
            "deleteCreator" : deleteCreator
        };

        function createCreator(creator) {
            console.log("hello create creator " + creator.name);
            var exist = findCreatorByName(creator.name);
            if(exist===null) {
                creator._id = (creators.length + 1).toString();
                creators.push(creator);
                console.log("created creator " + creator.name);
            }
        }

        function findCreatorById(creatorID) {
            console.log("hello findCreatorById " + creatorID);
            var i;
            for (i = 0; i < creators.length; i++) {
                if (creators[i]._id === creatorID) {
                    console.log("found creator " + creators[i].name);
                    return creators[i];
                }
            }
            return null;
        }

        function findCreatorByName(name) {
            console.log("hello findCreatorByName " + name);
            var i;
            for (i = 0; i < creators.length; i++) {
                if (creators[i].name === name) {
                    console.log("found creator " + creators[i]._id);
                    return creators[i];
                }
            }
            return null;
        }

        function updateCreator(creatorID, creator) {
            console.log("hello update creator " + userID);
            var i;
            for (i = 0; i < creators.length; i++) {
                if (creators[i]._id === creatorID) {
                    creators[i] = creator;
                }
            }
        }

        function deleteCreator(creatorID) {
            console.log("hello delete creator :(");
            console.log("creators length is " + creators.length);
            var i;
            for (i = 0; i < creators.length; i++) {
                if (creators[i]._id === creatorID) {
                    creators.splice(i, 1);
                    console.log("deleted creator, now creators length is " + creators.length);
                }
            }
        }

        return api;
    }
})();
