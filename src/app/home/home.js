
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
      url: '/',
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
      url: 'search',
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

HomeCtrl.$inject = ['apiFactory', '$state', '$scope', '$timeout'];

function HomeCtrl(apiFactory, $state, $scope, $timeout){
  var vm = this;

  vm.searchQuery = undefined;
  vm.index1 = 0;
  vm.count = 10;
  vm.minPrice = undefined;
  vm.maxPrice = undefined;
  vm.country = undefined;
  vm.isLoading = false;

  vm.onSearch = function onSearch() {
    if(vm.searchQuery === ''){
      $state.go('home');
      return;
    }

    $state.go('home.list-view');
    vm.isLoading = true;
    apiFactory.getArticles(vm.searchQuery, vm.index1, vm.count, vm.minPrice, vm.maxPrice, vm.country)
      .then(function(response){
        vm.isLoading = false;
        apiFactory.getResponse().response = response.data;
      },
      function(error){
        vm.isLoading = false;
        $state.go('home');
        console.error(error);
      }
    );
  };
}
