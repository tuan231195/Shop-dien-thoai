angular.module('product-ad-mod', []).component('productSection', {
    controller: function ($scope) {
        $scope.load = function () {
            console.log("Loaded");
            // with plugin options
            $("#input-id").fileinput({'previewFileType': 'image'});
        };

        $scope.load();
    },
    templateUrl: "templates/product.html"
});