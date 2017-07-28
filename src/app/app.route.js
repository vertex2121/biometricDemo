(function() {
    'use strict';
    angular
      .module('app')
      .config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
      var states = [
        {
          name: 'home',
          url: '',
          component: 'investigationsComponent',
          resolve: {
            investigations: function(investigationService) {
              return investigationService.getAllInvestigations();
            }
          }
        },
        {
          name: 'investigations',
          url: '/investigations',
          component: 'investigationsComponent',
          resolve: {
            investigations: function(investigationService) {
              return investigationService.getAllInvestigations();
            }
          }
        },
        {
          name: 'investigations.investigationPersons',
          url: '/{investigationListId}',
          component: 'investigationPersonsComponent',
          resolve: {
            investigationPersons: function(investigationService, $transition$) {
              return investigationService.getInvestigation($transition$.params().investigationListId);
            }
          }
        }, {
          name: 'person',
          url: '/persons/{personId}',
          component: 'personComponent',
          resolve: {
            person: function(personService, $transition$) {
              return personService.getPerson($transition$.params().personId);
            }
          }
        }
    ];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  }
})();
