angular.module('navigation-mod', []).component('navigationSection', {
    controller: ['$location', function ($location) {
        console.log($location.path());
        this.isSelected = function(section){
            return $location.path() === ("/" + section);
        }
    }],
    templateUrl: "../../templates/header.html"
});