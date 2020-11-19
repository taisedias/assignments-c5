(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://peaceful-anchorage-46763.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
