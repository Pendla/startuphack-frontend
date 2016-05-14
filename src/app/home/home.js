
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
  $stateProvider
    .state( 'home', {
      url: '',
      views: {
        "main": {
          controller: 'HomeCtrl',
          controllerAs: 'vm',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    })
    .state('home.list-view', {
      url: '/search',
      views: {
        "list": {
          controller: 'ListViewCtrl',
          controllerAs: 'vm',
          templateUrl: 'list-view/list-view.tpl.html'
        }
      },
      data:{ pageTitle: 'Search result' }
    });
});

HomeCtrl.$inject = ['apiFactory', '$state'];

function HomeCtrl(apiFactory, $state){
  var vm = this;

  vm.searchQuery = '';
  vm.onsearch =

  vm.onSearch = function onSearch() {
    console.log('performing search');
    $state.go('home.list-view');
    apiFactory.getArticles(vm.searchQuery)
      .then(function(response){
        console.log(response);
      },
      function(error){
        console.log(error);
      }
    );
  };
}
