var app = angular.module('myApp',[]);
app.directive('myDirective', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: '<h1>myDirective</h1>',

        compile: function () {
          return function ($scope, $element, $attrs) {

              $element.on('mouseover', function (event, data) {
                  console.info('mouseover is done in compile');
              });

          }
        },

        link: function ($scope, $element, $attrs) {

            $element.on('mouseover', function (event, data) {
                console.info('mouseover is done!');
            });

        }
    }
})
