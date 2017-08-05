(function(){
    'use strict';
    var spaApp = angular.module('spaApp', ['ngRoute']);
    spaApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'fragments/home.html',
            controller: 'homeController'
        })
        .when('/profile', {
            templateUrl: 'fragments/profile.html',
            controller: 'profileController'
        })
    });

    var homeController = function($scope, $location, $http) {
        (function($scope, $http) {
            $http({
                method: 'GET',
                url: '/home'
            }).then(function successCallback(response) {
                $scope.greeting = response.data.greeting;
                $scope.appname = response.data.appname;
            }, function errorCallback(response) {
                alert("Error getting the page info! :(");
            });
        })($scope, $http);

    }

    var profileController = function($scope, $location, $http) {
        (function($scope, $http) {
            $http({
                method: 'GET',
                url: '/profile'
            }).then(function successCallback(response) {
                $scope.username = response.data.username;
                $scope.age = response.data.age;
            }, function errorCallback(response) {
                alert("Error getting the user info! :(");
            });
        })($scope, $http);
    }

     homeController.$inject = ['$scope', '$location' ,'$http'];
     spaApp.controller("homeController", homeController);

     profileController.$inject = ['$scope', '$location', '$http'];
     spaApp.controller("profileController", profileController);
})();