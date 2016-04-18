/**
 * Created by f on 2016/4/13.
 */
var app = angular.module('myApp',[]);
app.controller('my.ctrl', function ($injector) {

    $injector.invoke(function (MyService) {
        MyService.print();
    })


})


app.factory('MyService', function () {
    return {
        print : function () {
            console.info('print is called');
        }
    }
})



