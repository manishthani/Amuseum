angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state,$ionicModal, $timeout) {


    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

      // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };
      // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
        }, 1000);
        if($scope.loginData.username ==="Manish" && $scope.loginData.password === "hello") $state.go("app.playlists");

    };
})


.controller('WorkCtrl', function($scope, $stateParams) {
})

.controller('WorksCtrl', function($scope, $timeout, $stateParams, $log){
    $scope.works = [
    //We need to sort them in order to see them correctly in the view
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

.controller('WorkCtrl', function($scope, $stateParams) {
})

.controller ('LoginCtrl', function($scope,$state,$ionicModal, $timeout){
    // Form data for the login modal
    $scope.loginData = {};
    $scope.error = false;
    $scope.doLogin = function() {
        //console.log('Doing login', $scope.loginData);
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $scope.error = false;
        if($scope.loginData.username === "Manish" && $scope.loginData.password === "hello") {
            $state.go("app.newsfeed");
        }
        else $scope.error= true;
        //else -> Inform user of password incorrect
        $scope.loginData.username = "";
        $scope.loginData.password = "";

      };
});
