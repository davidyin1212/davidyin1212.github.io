angular.module('portfolioApp', ['ngRoute','ngAnimate','ui.bootstrap','angular-carousel','ngAria','ngMaterial']);

// configure  routes
angular.module('portfolioApp').config(function($routeProvider, $mdThemingProvider) {
    $routeProvider
        // route for the home page
        .when('/index', {
            templateUrl : 'views/home.html',
            controller  : 'MainController'
        })

        // route for the skills page
        .when('/skills', {
            templateUrl : 'views/skills.html',
            controller  : 'SkillsController'
        })

        // route for the expirence page
        .when('/expirence', {
            templateUrl : 'views/expirence.html',
            controller  : 'ExpirenceController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'AboutController'
        })
        .when('/hh/:id', {
            templateUrl : 'views/expirenceDetail.html',
            controller  : 'ExpirenceController'
        })
        .when('/nexj/:id', {
            templateUrl : 'views/expirenceDetail.html',
            controller  : 'ExpirenceController'
        })

        .when('/lineup/:id', {
            templateUrl : 'views/expirenceDetail.html',
            controller  : 'ExpirenceController'
        })

        .when('/amazon/:id', {
            templateUrl : 'views/expirenceDetail.html',
            controller  : 'ExpirenceController'
        })

        .when('/interaxon/:id', {
            templateUrl : 'views/expirenceDetail.html',
            controller  : 'ExpirenceController'
        })

        .otherwise({ 
          redirectTo: '/index' 
        });
    $mdThemingProvider.theme('default')
    .primaryPalette('blue');
});

// angular.module('portfolioApp').run(function($templateCache) {
//     $templateCache.put('views/skills.html');
//     $templateCache.put('views/expirence.html');
//     $templateCache.put('views/about.html');
//     $templateCache.put('views/expirenceDetail.html');
// });