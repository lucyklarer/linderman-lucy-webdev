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
            "findWorkByTitle" : findWorkByTitle,
            "findWorkById" : findWorkById,
            "findWorksByCreator" : findWorksByCreator,
            "findWorksByYear" : findWorksByYear,
            "updateWork" : updateWork,
            "deleteWork" : deleteWork
        };

        function createWork(work) {
            console.log("hello create work " + work.title);
            var exist = findWorkByTitle(work.title);
            if(exist===null) {
                work._id = (works.length + 1).toString();
                works.push(work);
                console.log("created work " + work.title);
            }
        }

        function findWorkByTitle(title) {
            console.log("hello findWorkByTitle " + title);
            var i;
            for (i = 0; i < works.length; i++) {
                if (works[i].title === title) {
                    console.log("found work " + works[i]._id);
                    return works[i];
                }
            }
            return null;
        }

        function findWorkById(workID) {
            console.log("hello findWorkById " + workID);
            var i;
            for (i = 0; i < works.length; i++) {
                if (works[i]._id === workID) {
                    console.log("found work " + works[i].title);
                    return works[i];
                }
            }
            return null;
        }

        function findWorksByCreator(creatorID) {
            var i;
            var creatorWorks = [];
            for (i = 0; i < works.length; i++) {
                if (works[i]._id === creatorID) {
                    console.log("found work " + works[i].title);
                    console.log("work id is " + works[i]._id);
                    creatorWorks.push(works[i]);
                }
            }
            return creatorWorks;
        }

        function findWorksByYear(year) {
            var i;
            var yearWorks = [];
            for (i = 0; i < works.length; i++) {
                if (works[i].year === year) {
                    console.log("found work " + works[i].title);
                    console.log("work id is " + works[i]._id);
                    yearWorks.push(works[i]);
                }
            }
            return yearWorks;
        }


        function updateWork(workID, work) {
            console.log("hello update work " + workID);
            var i;
            for (i = 0; i < works.length; i++) {
                if (works[i]._id === workID) {
                    works[i] = work;
                }
            }
        }

        function deleteWork(workID) {
            console.log("hello delete work :(");
            console.log("works length is " + works.length);
            var i;
            for (i = 0; i < works.length; i++) {
                if (works[i]._id === workID) {
                    works.splice(i, 1);
                    console.log("deleted work, now works length is " + works.length);
                }
            }
        }

        return api;
    }
})();
