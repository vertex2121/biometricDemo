(function() {
    'use strict';

    angular
        .module('app')
        .component('personComponent', personComponent());

    /* @ngInject */
    function personComponent() {
        var component = {
            bindings: {
              person: '<'
            },
            templateUrl: '/person/person.html',
            controller: personController,
        };

        return component;
    }

    //personComponent.$inject = ['dependencies'];

    /* @ngInject */
    function personController() {
    }
})();
