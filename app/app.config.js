angular.module('fluigutilsApp').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/tools', {template: '<tools-list></tools-list>'})
        .when('/tools/bpm/cancel-requests', {template: 'cancel requests'})
        .when('/tools/bpm/export-process', {template: 'export process'})
        .when('/tools/wcm/create-company', {template: 'create company'})
        .when('/tools/wcm/create-users', {template: 'create users'})
        .otherwise('/tools');
}]);