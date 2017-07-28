(function() {
  'use strict';
  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$locationProvider'];

  function configure($locationProvider) {
    //$locationProvider.html5Mode(true);
  }
})();
