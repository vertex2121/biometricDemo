(function() {
  'use strict';

  angular
    .module('app')
    .factory('investigationService', investigationService);

  investigationService.$inject = ['$http'];

  /* @ngInject */
  function investigationService($http) {
    var service = {
      getAllInvestigations: getAllInvestigationsImpl,
      getInvestigation: getInvestigationImpl
    };

    return service;

    function getAllInvestigationsImpl() {
      return $http.get('mock/allInvestigations.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }

    function getInvestigationImpl(id) {
      return $http.get('mock/getInvestigation.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }
  }
})();
