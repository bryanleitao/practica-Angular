import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular
    .module('spotifyzier', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        views: {
            header: {templateUrl: 'views/header.html',
                     controller: 'headerCtrl'
                    },
            main: {templateUrl: 'views/main.html',
                     controller: 'spotifyzierCtrl'
                    }
        },
        controller: 'spotifyzierCtrl'
    })
    ;
});
