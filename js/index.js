(function() {
'use strict';

angular
    .module('guildApp', [
        'ngRoute',
        'ngAnimate',
        'ngMaterial',
        'ngtweet'
    ])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];

run.$inject = [];

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); // enable angular HTML5 mode

    $routeProvider
        .when('/', {
            templateUrl: 'partials/guild.html', // file name = name of app, hyphen separated words
            controller: 'GuildController', // controller ProudCamelCase and long (Controller)
            controllerAs: 'GuildCtrl' // controllerAs camelCase and short (Ctrl)
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
}

/* The run block will execute during angular run time execution, giving us the data we need on page load*/
function run() {

}

})();
