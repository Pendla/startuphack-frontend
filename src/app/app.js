angular.module('fnfjs', [
  'templates-app',
  'templates-common',
  'fnfjs.home',
  'fnfjs.list-view',
  'ui.router'
])

.constant('_', window._)

.config(function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
})

.run(function run () {
})

.controller('AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | fnfjs' ;
    }
  });
})

.directive('background', ['$interval', function ($interval) {
  function link (scope, element, attr) {
    function nextBackground() {
      // The number of backgrounds located in /assets/bgs/
      var backgroundCount = 3;
      // Pick a random new background.
      var imageNumber = Math.floor((Math.random() * backgroundCount) + 1);

      // TODO: Make sure that it is not the same as last time.

      return imageNumber + '.jpg';
    }

    function updateBackground() {
      element.css('background-image', 'url(assets/bgs/' + nextBackground() + ')');
    }

    $interval(function () {
      updateBackground();
    }, 5000);
  }

  return {
    link: link
  };
}])

;
