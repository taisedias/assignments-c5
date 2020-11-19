(function () {
  
  angular.module('public')
  .controller('MyInfoController', MyInfoController);
  
  MyInfoController.$inject = ["userPreferences", "MenuService"];
  function MyInfoController(userPreferences, MenuService) {
    var myInfoCtrl = this;
    myInfoCtrl.userPreferences = userPreferences;
    MenuService.getMenuItem(myInfoCtrl.userPreferences.menuItem)
    .then(function (menuItem) {
      console.log(myInfoCtrl.menuItem);
      myInfoCtrl.menuItem = menuItem;
    });
  }
  
  })();
  