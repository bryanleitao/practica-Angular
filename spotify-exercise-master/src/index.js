import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular
  .module('spotifyzier', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    
    $urlRouterProvider.otherwise('/'); 
    
    $stateProvider
    .state('main',{ 
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'spotifyzierCtrl'
      })
    .state('comment',{ 
      url: '/comment',
      templateUrl: 'views/comment.html',
      controller: 'spotifyzierCtrl'
      })
    
    ;  
  });
