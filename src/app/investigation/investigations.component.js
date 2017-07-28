(function() {
  'use strict';

  angular
    .module('app')
    .component('investigationsComponent', investigationsComponent());

  /* @ngInject */
  function investigationsComponent() {
    var component = {
      bindings: {
        investigations: '<'
      },
      templateUrl: '/investigation/investigations.html',
      controller: investigationsController,
    };

    return component;
  }

  //investigationsController.$inject = ['Logger'];

  /* @ngInject */
  function investigationsController() {
    var vm = this
  }
})();
