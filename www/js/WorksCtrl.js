angular.module('WorksModule', [])
.factory('WorksService', ['$http', function ($http) {
        return {
            getWorks: function (){
                //Hardcoded values , later we need to replace to API Calls
                var works = [
                    //Maybe we need to sort them in order to see them correctly in the view
                    { title: 'El grito', author: 'AuthorElGrito',id: 5},
                    { title: 'Guernica', author: 'AuthorGuernica', id: 2},
                    { title: 'Las Meninas',author: 'AuthorMeninas', id: 3},
                    { title: 'Miguel Angel', author: 'AuthorMiguelAngel',id: 4},
                    { title: 'Mona Lisa',author: 'AuthorMonaLisa', id: 1},
                    { title: 'Obra A', author: 'AuthorA',id: 6},
                    { title: 'Obra B',author: 'AuthorB', id: 7},
                    { title: 'Obra C',author: 'AuthorC', id: 8},
                    { title: 'Obra D',author: 'AuthorD', id: 9},
                    { title: 'Obra E',author: 'AuthorE',id: 11},
                    { title: 'Obra F',author: 'AuthorF',id: 10}
                ];
                return works;
               // return $http.get("URL" + "/works");
            },
            getWork: function (id) {
                //Hardcoded values , later we need to replace to API Calls
                return {title: 'El Grito', author: 'AuthorElGrito', id:5}
                //return $http.get("URL" + "/works/" + id);
            } 
        };
    }])
.controller('WorksCtrl', function($scope, $timeout, $stateParams, $log, WorksService){
    $scope.works = WorksService.getWorks();
    // [
    // //We need to sort them in order to see them correctly in the view
    //     { title: 'El grito', author: 'AuthorElGrito',id: 5},
    //     { title: 'Guernica', author: 'AuthorGuernica', id: 2},
    //     { title: 'Las Meninas',author: 'AuthorMeninas', id: 3},
    //     { title: 'Miguel Angel', author: 'AuthorMiguelAngel',id: 4},
    //     { title: 'Mona Lisa',author: 'AuthorMonaLisa', id: 1},
    //     { title: 'Obra A', author: 'AuthorA',id: 6},
    //     { title: 'Obra B',author: 'AuthorB', id: 7},
    //     { title: 'Obra C',author: 'AuthorC', id: 8},
    //     { title: 'Obra D',author: 'AuthorD', id: 9},
    //     { title: 'Obra E',author: 'AuthorE',id: 11},
    //     { title: 'Obra F',author: 'AuthorF',id: 10}
    // ];
    $scope.search="";
    $scope.searchWorks = [];
    $scope.fullList = true;
    $scope.filteredList = false;

    $scope.searchHandler = function () {

        var searchLength = $scope.search.length;
        console.log($scope.search.length);
        if (searchLength === 0) {
            $scope.filteredList = false;
           $scope.fullList = true;
        } else {
            $scope.filteredList = true;
            $scope.fullList = false;
        }
    };
})
