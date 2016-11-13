(function () {
  'use strict';

  var LunchCheck = angular.module('LunchCheck', []);

  LunchCheck.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.check = function () {
      if ($scope.lunch.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "It is too much!";
      }
    };
  };
})();