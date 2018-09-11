(function(){
    'use strict';

    angular.module('RoutingApp',['ui.router']);

angular.module('RoutingApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

 function RoutesConfig($stateProvider, $urlRouterProvider) 
    {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state(
            'home',{
            url:'/home',
            templateUrl:'src/home.html'
            })
        .state(
            'about',{
                url:'/about',
                templateUrl:'src/about.html'
            }
        );
    };
})();