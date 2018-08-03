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
            "findCreatorByLastName" : findCreatorByLastName,
            "updateCreator" : updateCreator,
            "deleteCreator" : deleteCreator
        };

        function createCreator(creator) {

        }

        function findCreatorById(creatorID) {

        }

        function findCreatorByLastName(lastName) {

        }

        function updateCreator(creatorID, creator) {

        }

        function deleteCreator(creatorID) {

        }

        return api;
    }
})();
