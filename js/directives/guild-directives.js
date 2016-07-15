(function() {
'use strict';

angular
    .module('guildApp')
    .directive('guildHeader', guildHeader)
    .directive('guildReviews', guildReviews)
    .directive('guildInfo', guildInfo);

function guildHeader() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/guild-header.html'
    };
}

function guildReviews() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/guild-reviews.html'
    };
}

function guildInfo() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/guild-info.html'
    };
}

})();
