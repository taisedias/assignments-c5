(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.checkFoodList = function () {
      if (typeof $scope.foodList === 'undefined' || $scope.foodList === "") {
        $scope.message = "Please enter data first";
        return;
      }
      var list = $scope.foodList.split(',');
      if (list.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();