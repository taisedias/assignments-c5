(function () {
  "use strict";
  
  angular.module('common')
  .service('UserService', UserService);
  
  UserService.$inject = [];
  function UserService() {
    var service = this;

    service.userPreferences = {};
  
    service.saveUserPreferences = function (userPreferences) {
      service.userPreferences = userPreferences;
    };
  
    service.getUserPreferences = function () {
      return service.userPreferences;
    };
  }
  
  })();
  