let timeApp = angular.module('timeApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngTable']);

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

// function makeChart(){
   
// console.log('making the chart');

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// })
// }
