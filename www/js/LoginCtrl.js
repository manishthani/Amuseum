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