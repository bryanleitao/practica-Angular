var app = angular.module("spotifyzier");

app.directive("bgImg", function(){
    return function(scope, element, attrs){
        var url = attrs.bgImg;
        element.css({
            'background-image':         'url(' + url +')',
            'background-size' :         'cover',
            'background-attachment':    'fixed',
            'margin-right':             '-15px',
            'margin-left':              '-15px'
        });
    };
});
