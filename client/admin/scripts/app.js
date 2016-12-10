angular.module("ShoppingAdmin", ['navigation-ad-mod', 'header-ad-mod','home-ad-mod', 'category-ad-mod', 'product-ad-mod', 'ngRoute']).controller('mainCtrl', ["$scope", function ($scope) {

}]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {template: '<home-section></home-section>'})
        .when("/product", {template: '<product-section></product-section>'})
        .when("/category", {template: '<category-section></category-section>'})
        .otherwise("/home");
}]);
