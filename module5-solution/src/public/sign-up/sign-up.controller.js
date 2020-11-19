(function () {
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ["MenuService", "UserService"];
  function SignUpController(MenuService, UserService) {
    var signUp = this;

    signUp.hasMenuItem = false;
    signUp.completed = false;
    signUp.submit = function () {
      MenuService.menuItemExists(signUp.user.menuItem)
      .then(function (hasMenuItem) {
        signUp.hasMenuItem = hasMenuItem;
        if (hasMenuItem) {
          UserService.saveUserPreferences(signUp.user);
          signUp.completed = true;
        }
        signUp.menuItemValidated = true;
      });
    };
  }
  
  })();
  