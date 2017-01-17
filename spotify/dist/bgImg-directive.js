var app = angular.module("spotify");

app.directive("bgImg", function(){
    return function(scope, element, attrs){
        var url = attrs.bgImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover',
            'background-attachment': 'fixed'
        });
    };
});