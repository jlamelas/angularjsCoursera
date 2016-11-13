(function () {
  'use strict';

  var LunchCheck = angular.module('LunchCheck', []);

  LunchCheck.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.lunch = "";
    $scope.message = "";
    
    $scope.check = function () {
      if ($scope.lunch === "") {
        $scope.message = "Please enter data first";
      } else {

      var lunchList = splitLunch($scope.lunch);

      if (lunchList <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }}
    };

    function splitLunch (string){
      var comma = ",";
      var lunchArray = $scope.lunch.split(comma);
      var lunchItems = lunchArray.length;
      return lunchItems;
    }
  };
})();