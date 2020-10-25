(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', '$stateParams', 'items']
  function ItemsController(MenuDataService, $stateParams, items) {
    var $ctrl = this;
    $ctrl.items = items;
  }
  
  })();
  