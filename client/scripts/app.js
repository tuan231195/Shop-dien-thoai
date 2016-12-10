angular.module("ShoppingApp", ['navigation-mod', 'footer-mod', 'about-mod', 'home-mod', 'contact-mod', 'product-mod', 'cart-mod', 'faq-mod', 'login-mod', 'info-mod', 'ngRoute']).controller('mainCtrl', ["$scope", function ($scope) {

}]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {template: '<home-section></home-section>'})
        .when("/product", {template: '<product-section></product-section>'})
        .when("/contact", {template: '<contact-section></contact-section>'})
        .when("/about", {template: '<about-section></about-section>'})
        .when("/cart", {template: '<cart-section></cart-section>'})
        .when("/login", {template: '<login-section></login-section>'})
        .when("/faq", {template: '<faq-section></faq-section>'})
        .when("/info", {template: '<info-section></info-section>'})
        .otherwise("/home");
}]);
