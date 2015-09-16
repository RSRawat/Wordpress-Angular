'use strict';

import 'angular';
import angularUiRouter from 'angularUiRouter';

const moduleName = 'wordpressAngular'

angular
    .module(moduleName, [angularUiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<h1>This is home page</h1>'
            });

        $urlRouterProvider.otherwise('/home');
    });

angular.element(document).ready(() => {
	angular.bootstrap(document, [moduleName]);
});