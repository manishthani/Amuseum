angular.module('WorkModule', ['WorksServiceModule'])
.controller('WorkCtrl', function($scope, $stateParams, WorksService, SavedWorksService) {
   // console.log($routeParams.id);
   console.log ($stateParams.workId);

   $scope.workSelected = SavedWorksService.getWork($stateParams.workId);
   //$scope.workSelected = WorksService.getWork($stateParams.workId);
   //console.log($scope.workSelected.images[0].url);
   $scope.refreshWork = function(){
        WorksService.getWorks().then(function(response){
            SavedWorksService.setWorks(response.data);
        }, function(errResponse){
            console.log("Error Works:"+errResponse);
        });
        $scope.workSelected = SavedWorksService.getWork($stateParams.workId);
        $scope.$broadcast('scroll.refreshComplete');
    };
})