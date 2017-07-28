(function() {
  'use strict';

  angular
    .module('app')
    .component('investigationPersonsComponent', investigationPersonsComponent());

  /* @ngInject */
  function investigationPersonsComponent() {
    var component = {
      bindings: {
        investigationPersons: '<'
      },
      templateUrl: '/investigation/investigation-persons.html',
      controller: investigationPersonsController,
    };

    return component;
  }

  //investigationPersonsController.$inject = ['Logger'];

  /* @ngInject */
  function investigationPersonsController() {

  }
})();
