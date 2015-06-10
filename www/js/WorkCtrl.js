angular.module('WorkModule', ['WorksServiceModule'])
.controller('WorkCtrl', function($scope, $stateParams, WorksService, SavedWorksService) {
   // console.log($routeParams.id);
   console.log ($stateParams.workId);

   $scope.workSelected = SavedWorksService.getWork($stateParams.workId);
   //$scope.workSelected = WorksService.getWork($stateParams.workId);
   //console.log($scope.workSelected.images[0].url);
})