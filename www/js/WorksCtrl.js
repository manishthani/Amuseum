angular.module('WorksModule', ['WorksServiceModule'])
// .factory('WorksService', ['$http', function ($http) {
//         var savedWorks = {};
//         return {
//             getWork: function(id) {
//                 return savedWorks[id];
//             },
//             getWorks: function (){
//                 //Hardcoded values , later we need to replace to API Calls
//                 var works = [
//                     //Maybe we need to sort them in order to see them correctly in the view
//                     { title: 'El grito', author: 'AuthorElGrito',id: 5},
//                     { title: 'Guernica', author: 'AuthorGuernica', id: 2},
//                     { title: 'Las Meninas',author: 'AuthorMeninas', id: 3},
//                     { title: 'Miguel Angel', author: 'AuthorMiguelAngel',id: 4},
//                     { title: 'Mona Lisa',author: 'AuthorMonaLisa', id: 1},
//                     { title: 'Obra A', author: 'AuthorA',id: 6},
//                     { title: 'Obra B',author: 'AuthorB', id: 7},
//                     { title: 'Obra C',author: 'AuthorC', id: 8},
//                     { title: 'Obra D',author: 'AuthorD', id: 9},
//                     { title: 'Obra E',author: 'AuthorE',id: 11},
//                     { title: 'Obra F',author: 'AuthorF',id: 10}
//                 ];
//                 savedWorks = works;
//                 return works;
//                // return $http.get("URL" + "/works");
//             }
//         };
//     }])
.controller('WorksCtrl', function($scope, $rootScope, $timeout, $stateParams, $log, WorksService, SavedWorksService){
    $scope.works = [];

    WorksService.getWorks().then(function(response){
            $scope.works = response.data;
            console.log(response.data[0].name);
            SavedWorksService.setWorks(response.data);
        }, function(errResponse){
            console.log("Error Works:"+errResponse);
        });
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
        if (searchLength === 0) {
            $scope.filteredList = false;
           $scope.fullList = true;
        } else {
            $scope.filteredList = true;
            $scope.fullList = false;
        }
    };

    $scope.refreshWorks = function(){
        WorksService.getWorks().then(function(response){
            SavedWorksService.setWorks(response.data);
            $scope.works = response.data;
        }, function(errResponse){
            console.log("Error Works:"+errResponse);
        });
        
        $scope.$broadcast('scroll.refreshComplete');
    };
    // $scope.workWithId = function (id) {
    //     $rootScope.workSelected = $scope.works[id-1]; //OJO: Posicion de vector no debe porque coincidir con id de obra
    //     console.log($rootScope.workSelected.title);

    // }
})
