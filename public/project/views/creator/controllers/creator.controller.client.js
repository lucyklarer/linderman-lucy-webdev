(function() {

    angular
        .module("AquaRegia")
        .controller("CreatorController", CreatorController)
        .controller("AddCreatorController", AddCreatorController)
        .controller("CreatorDetailsController", CreatorDetailsController)
        .controller("EditCreatorController", EditCreatorController)
        .controller("SaveCreatorController", SaveCreatorController)
        .controller("ShareCreatorController", ShareCreatorController);

    function CreatorController() {

    }

    function AddCreatorController(CreatorService) {
            console.log("hello addcreatorcontroller");
            var vm = this;
            vm.creator = {};

            vm.newCreator = newCreator;


            function newCreator() {
                console.log("hello newcreator");
                var addCreator = { _id: "", name: vm.creator.name, status: vm.creator.status};
                CreatorService.createCreator(addCreator);

        }
    }

    function CreatorDetailsController(CreatorService, $routeParams, $location) {
        console.log("hello CreatorDetailsController");
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.creator = {};
        vm.creatorID = $routeParams["cid"];
        console.log("creatorID is " + vm.creatorID);

        function init() {
            console.log("hello CreatorDetailsController init");
            vm.current = CreatorService.findCreatorById(vm.creatorID);
            vm.creator.name = vm.current.name;
            vm.creator.status = vm.current.status;
        }
        init();
    }

    function EditCreatorController($routeParams, CreatorService, $location) {
        console.log("hello EditCreatorController");
        console.log($location.url());
        console.log($location.path());
        var path = $location.path();

        var vm = this;
        vm.creator = {};
        vm.creatorID = $routeParams["cid"];
        console.log("creatorID is " + vm.creatorID);
        vm.updateCreatorProfile = updateCreatorProfile;

        function init() {
            console.log("hello creatorcontroller init");
            vm.current = CreatorService.findCreatorById(vm.creatorID);
            vm.creator.name = vm.current.name;
            vm.creator.status = vm.current.status;
        }
        init();

        function updateCreatorProfile() {
            console.log("hello updateCreatorProfile");
            updateCreator = {_id: vm.creatorID, name: vm.creator.name, status: vm.creator.status};
            CreatorService.updateCreator(vm.creatorID, updateCreator);
            console.log("updated creator " + vm.creator.username);
        }
    }

    function SaveCreatorController() {

    }

    function ShareCreatorController() {

    }
})();