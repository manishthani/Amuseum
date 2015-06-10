angular.module('WorksServiceModule', [])
//Se usa para guardarnos las obras que consultamos de la api
.factory('SavedWorksService', ['$rootScope', function($rootScope){
    $rootScope.savedWorks = [];
    return {
        getWork: function(id) {
            var workSelected ;
            var works = $rootScope.savedWorks;
            for (var i = 0; i < works.length; ++i) {
             if (works[i]._id === id.toString()) {
                 workSelected = works[i];
             }
            }
            return workSelected;
        },
        getWorks: function() {
            return $rootScope.savedWorks;
        },
        setWorks: function(works) {
            $rootScope.savedWorks = [];
            return $rootScope.savedWorks = works;
        }
    };
}])

//Servicio para pedir las obras
.factory('WorksService', ['$http','SavedWorksService', function ($http) {
        return {
            getWorks: function (){
                //Hardcoded values , later we need to replace to API Calls
                //     //Maybe we need to sort them in order to see them correctly in the view
                //     { title: 'El grito', author: 'AuthorElGrito',id: 1},
                //     { title: 'Guernica', author: 'AuthorGuernica', id: 2},
                //     { title: 'Las Meninas',author: 'AuthorMeninas', id: 3},
                //     { title: 'Miguel Angel', author: 'AuthorMiguelAngel',id: 4},
                //     { title: 'Mona Lisa',author: 'AuthorMonaLisa', id: 5},
                //     { title: 'Obra A', author: 'AuthorA',id: 6},
                //     { title: 'Obra B',author: 'AuthorB', id: 7},
                //     { title: 'Obra C',author: 'AuthorC', id: 8},
                //     { title: 'Obra D',author: 'AuthorD', id: 9},
                //     { title: 'Obra E',author: 'AuthorE',id: 10},
                //     { title: 'Obra F',author: 'AuthorF',id: 11}
                
                // var works = $http.get('https://amuseum-1.herokuapp.com/artworks.json').
                //     success(function(data, status, headers, config) {
                //      return data;
                //     }).
                //     error(function(data, status, headers, config) {
                //     // called asynchronously if an error occurs
                //     // or server returns response with an error status.
                //     });
                return $http.get("https://amuseum-1.herokuapp.com/artworks");
            }
            // getWork: function(id) {
            // 	var works = [
            //         //Maybe we need to sort them in order to see them correctly in the view
            //         { title: 'El grito', author: 'AuthorElGrito',id: 1},
            //         { title: 'Guernica', author: 'AuthorGuernica', id: 2},
            //         { title: 'Las Meninas',author: 'AuthorMeninas', id: 3},
            //         { title: 'Miguel Angel', author: 'AuthorMiguelAngel',id: 4},
            //         { title: 'Mona Lisa',author: 'AuthorMonaLisa', id: 5},
            //         { title: 'Obra A', author: 'AuthorA',id: 6},
            //         { title: 'Obra B',author: 'AuthorB', id: 7},
            //         { title: 'Obra C',author: 'AuthorC', id: 8},
            //         { title: 'Obra D',author: 'AuthorD', id: 9},
            //         { title: 'Obra E',author: 'AuthorE',id: 10},
            //         { title: 'Obra F',author: 'AuthorF',id: 11}
            //     ];
            //     var workSelected ;
            //     for (var i = 0; i < works.length; ++i) {
            //     	if (works[i].id === parseInt(id)) {
            //     		workSelected = works[i];
            //     	}
            //     }
            //     return workSelected;
            // }
        };
    }])