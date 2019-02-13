(function() {
    angular
        .module("wbdvDirectives", [])
        .directive("wbdvSortable", wbdvSortable);

        function wbdvSortable () {
            return {
                scope: { data : '='},
                templateUrl: ""
            }
        }

})();