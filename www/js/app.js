// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic.ion.autoListDivider'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(truesf);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('app.newsfeed', {
    url: "/newsfeed",
    views: {
      'menuContent': {
        templateUrl: "templates/newsfeed.html"
      }
    }
  })
  .state('app.myentrances', {
    url: "/myentrances",
    views: {
      'menuContent': {
        templateUrl: "templates/myentrances.html"
      }
    }
  })
  .state('app.addentrance', {
    url: "/addentrance",
    views: {
      'menuContent': {
        templateUrl: "templates/addentrance.html"
      }
    }
  })

  .state('app.searchworksbytitle', {
    url: "/searchworksbytitle",
    views: {
      'menuContent': {
        templateUrl: "templates/searchworksbytitle.html",
        controller: 'WorksCtrl'
      }
    }
  })

  .state('app.searchworksbyauthor', {
    url: "/searchworksbyauthor",
    views: {
      'menuContent': {
        templateUrl: "templates/searchworksbyauthor.html",
        controller: 'WorksCtrl'
      }
    }
  })
   .state('app.showallworks', {
    url: "/showallworks",
    views: {
      'menuContent': {
        templateUrl: "templates/showallworks.html",
        controller: 'WorksCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/showallworks/:workId",
    views: {
      'menuContent': {
        templateUrl: "templates/work.html",
        controller: 'WorkCtrl'
      }
    }
  })
  .state('app.loginWeb', {
    url: "",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
