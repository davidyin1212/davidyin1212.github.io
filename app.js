angular.module('portfolioApp', ['ngRoute']);

// configure  routes
angular.module('portfolioApp').config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
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

        .otherwise({ 
          redirectTo: '/' 
        });
});