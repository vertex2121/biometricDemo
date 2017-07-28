(function() {
  'use strict';

  angular
    .module('app')
    .factory('personService', personService);

  personService.$inject = ['$http'];

  /* @ngInject */
  function personService($http) {
    var service = {
      getPerson: getPersonImpl
    };

    return service;

    function getPersonImpl(personId) {
      return $http.get('mock/getInvestigation.json', {
        cache: true
      }).then(function(resp) {
        return resp.data.find(function(item, i, arr) {
          if (item.id == personId) return item;
        });
      });
    }
  }
})();
