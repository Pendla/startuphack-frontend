
angular.module( 'fnfjs.list-view', [
  'ui.router'
])

.controller('ListViewCtrl', ListViewCtrl);

/**.config(function config( $stateProvider ) {
  $stateProvider.state( 'list-view', {
    url: '/search',
    views: {
      "main": {
        controller: 'ListViewCtrl',
        controllerAs: 'vm',
        templateUrl: 'list-view/list-view.tpl.html'
      }
    },
    data:{ pageTitle: 'Search result' }
  });
});*/

ListViewCtrl.$inject = [];

function ListViewCtrl(){
  var vm = this;

  vm.items = [{
      name: "iPhone5",
      image: "http://cdn.gsmarena.com/vv/reviewsimg/apple-iphone-5/thumb_.jpg",
      description: "Really nice iPhone, not used at all",
      price: "5000",
      fromSite: "www.tradera.se",
      city: "Gothenburg",
      country: "Sweden",
      url: "www.google.com",
      currency: "SEK"
    },{
      name: "iPhone6",
      image: "http://cdn.gsmarena.com/vv/reviewsimg/apple-iphone-5/thumb_.jpg",
      description: "Really nice iPhone, not used at all",
      price: "5000",
      fromSite: "www.tradera.se",
      city: "Gothenburg",
      country: "Sweden",
      url: "www.google.com",
      currency: "SEK"
    },{
      name: "iPhone7",
      image: "http://cdn.gsmarena.com/vv/reviewsimg/apple-iphone-5/thumb_.jpg",
      description: "Really nice iPhone, not used at all",
      price: "5000",
      fromSite: "www.tradera.se",
      city: "Gothenburg",
      country: "Sweden",
      url: "www.google.com",
      currency: "SEK"
    }
  ];
}
