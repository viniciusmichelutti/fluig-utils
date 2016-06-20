angular.module('toolsList').component('toolsList', {
    templateUrl: 'tools-list/tools-list.template.html',
    controller: ['$location', function($location) {
        this.serverUrl = "";
        this.goTo = function(url) {
            $location.url(url);
        }
    }]
});