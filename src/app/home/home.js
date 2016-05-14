
angular.module( 'fnfjs.home', [
  'ui.router',
  'API'
])

.controller('HomeCtrl', HomeCtrl)

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
});

/**
 * And of course we define a controller for our route.
 */

HomeCtrl.$inject = ['apiFactory'];

function HomeCtrl(apiFactory){
  var vm = this;

  apiFactory.getArticles()
    .then(function(response){
      console.log(response);
    },
    function(error){
      console.log("hallå");
    }
  );
}
