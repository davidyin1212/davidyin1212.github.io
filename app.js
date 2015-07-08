var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

// configure  routes
portfolioApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'controllers/main_controller'
        })

        // route for the skills page
        .when('/skills', {
            templateUrl : 'views/contact.html',
            controller  : 'controllers/skills_controller'
        })

        // route for the expirence page
        .when('/expirence', {
            templateUrl : 'views/contact.html',
            controller  : 'controllers/expirence_controller'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'controllers/about_controller'
        });
});