(function() {
    angular
        .module("AquaRegia")
        .factory("SearchService", SearchService);

    function SearchService() {
        var searches =
            [
                {_id: "000", type: "simple", term: "waititi"},
                {_id: "001", type: "simple", term: "fiction"},
                {_id: "002", type: "advanced", field: "year", term: "2017"},
                {_id: "003", type: "advanced", field: "status", term: "active"},
                {_id: "004", type: "advanced", field: "year", term: "2017"},
                {_id: "005", type: "simple", term: "thor"},
                {_id: "006", type: "simple", term: "shakespeare"},
                {_id: "007", type: "simple", term: "novels"}
            ];

        var api = {
            "createSearch" : createSearch,
            "findSearchById" : findSearchById,
            "updateSearch" : updateSearch,
            "deleteSearch" : deleteSearch
        };

        function createSearch(search) {

        }

        function findSearchById(searchID) {

        }

        function updateSearch(searchID, search) {

        }

        function deleteSearch(searchID) {

        }

        return api;
    }
})();
