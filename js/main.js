require.config({
    paths:{
        'jquery': '//cdn.staticfile.org/jquery/1.10.2/jquery.min',
        //'angular': '//cdn.staticfile.org/angular.js/1.2.10/angular.min',
        'angular':'../lib/angular/angular',
        'angular-route': '//cdn.staticfile.org/angular-ui-router/0.2.8/angular-ui-router.min',
        'domReady': '//cdn.staticfile.org/require-domReady/2.0.1/domReady.min',
        'bootstrap': "./scripts/bootstrap",
        'app': "./scripts/app",
        'router': "./scripts/ui-router",

        'mainController':'./scripts/controller/mainController',
        'controller1':'./scripts/controller/controller1',
        'module1':'./scripts/controller/module1'
},
shim:{
    'angular':{
        exports:'angular'
    },
    'angular-route':{
        deps:['angular'],
            exports: 'angular-route'
    }
},
deps:['bootstrap'],
   // urlArgs: "bust=" + (new Date()).getTime()
});