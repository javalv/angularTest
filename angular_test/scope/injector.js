/**
 * Created by f on 2016/4/13.
 */
var app = angular.module('myApp', ['services'])
    .controller('my.ctrl', function ($scope, $injector, MyService) {

        //$injector.invoke(function (MyService) {
        //    MyService.print();
        //})

        MyService.print($scope, "张三");
        $scope.$watch('name', function (o1,o2) {
            console.info(o1 + "," + o2);
        })

    })
    .controller('MyCtrl', function ($scope) {

    })


angular.module('services', [])
    .factory('MyService', [function () {
        return {
            print: function ($scope, name) {
                $scope.name = name;
                console.info('print is called');
            }
        }
    }])

function getAngular() {

    var appElement = document.querySelector('[ng-controller="my.ctrl"]');
    var $scope = angular.element(appElement).scope();
    console.info($scope.name);
    var injector = angular.injector(['services']);
    injector.get('MyService').print($scope, '李四');
    $scope.$apply();
    console.info($scope)
    //console.info(injector.annotate(function (name, age) {}));

}

function getAngularDiv(){

    var div = document.createElement("div");
    div.innerHTML = '<div ng-controller="MyCtrl" >{{content}}</div>';
    document.body.appendChild(div);

    //var appElement = document.querySelector('[ng-controller="my.ctrl"]');
    //var injector = angular.element(appElement).injector();

    angular.element(div).injector().invoke(function($compile) {
        var scope = angular.element(div).scope();
        scope.content = 'wangwu';
        $compile(div)(scope);
        console.info(scope)
        scope.$watch('content', function (o1,o2) {
            console.info(o1 + "," + o2);
        })
    });
}
