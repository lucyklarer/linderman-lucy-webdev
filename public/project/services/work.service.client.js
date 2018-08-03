(function() {
    angular
        .module("AquaRegia")
        .factory("WorkService", WorkService);

    function WorkService() {
        var works =
            [
                {_id: "000", title: "Crimson Peak", year: "2015", creatorID: "000", medium: "film"},
                {_id: "001", title: "The Shape Of Water", year: "2017", creatorID: "000", medium: "film"},
                {_id: "002", title: "Pacific Rim", year: "2013", creatorID: "000", medium: "film"},
                {_id: "003", title: "Thor: Ragnarok", year: "2017", creatorID: "001", medium: "film"},
                {_id: "004", title: "What We Do in the Shadows", year: "2014", creatorID: "001", medium: "film"},
                {_id: "005", title: "Middlemarch", year: "1871", creatorID: "002", medium: "fiction"},
                {_id: "006", title: "Hamlet", year: "1602", creatorID: "003", medium: "play"},
                {_id: "007", title: "Othello", year: "1603", creatorID: "003", medium: "play"},
                {_id: "008", title: "It's Always Sunny in Philadelphia", year: "2005 - present", creatorID: "004", medium: "television"},
                {_id: "009", title: "AP Bio", year: "2018", creatorID: "004", medium: "television"},
                {_id: "009", title: "Too Like the Lightning", year: "2016", creatorID: "005", medium: "fiction"},
                {_id: "009", title: "Seven Surrenders", year: "2017", creatorID: "005", medium: "fiction"},
            ];

        var api = {
            "createWork" : createWork,
            "findWorkById" : findWorkById,
            "findWorksByCreator" : findWorksByCreator,
            "findWorksByYear" : findWorksByYear,
            "updateWork" : updateWork,
            "deleteWork" : deleteWork
        };

        function createWork(work) {

        }

        function findWorkById(workID) {

        }

        function findWorksByCreator(creator) {

        }

        function findWorksByYear(year) {

        }


        function updateWork(workID, work) {

        }

        function deleteWork(workID) {

        }

        return api;
    }
})();
