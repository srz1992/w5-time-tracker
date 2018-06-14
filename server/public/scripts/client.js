let timeApp = angular.module('timeApp', ['ngRoute']);

timeApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/views/time-entry.html',
        controller: 'TimeEntryController as TEC'
    }).when('/manage-projects', {
        templateUrl: '/views/manage-projects.html',
        controller: 'ManageProjectsController as MPC'
    }).when('/reports', {
        templateUrl: '/views/reports.html',
        controller: 'ReportController as RC'
    }).otherwise({
        template: '<h1>404 Error</h1>'
    })
})