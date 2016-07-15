(function() {
'use strict';

angular
    .module('guildApp')
    .directive('guildScroll', guildScroll);

guildScroll.$inject = ['$timeout', '$window'];

function guildScroll($timeout, $window) {
	return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                var headerHeight = 64;
                var contentPosition = ($window.innerHeight / 2) - headerHeight;

                $element.on('scroll', function() {
                    var scrollPosition = $element[0].scrollTop;

                    if (scrollPosition >= contentPosition) {
                        $element.addClass('scrolled-past-hero');
                    } else {
                        $element.removeClass('scrolled-past-hero');
                    }

                    $scope.$apply();
                });
            }, 0);
        }
    };
}
})();
