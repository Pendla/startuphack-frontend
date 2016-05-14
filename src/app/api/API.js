angular.module('API', [])
.factory('apiFactory', apiFactory);

apiFactory.$inject = ['$http'];
function apiFactory ($http) {
  var apiBase = "http://46.101.97.59:8080/";
  var response = {response:[]};

  return {
    getArticles: getArticles,
    getApiBase: getApiBase,
    getResponse: getResponse

  };

  function getApiBase () {
    return apiBase;
  }

  function getResponse() {
    return response;
  }

  /* user requests */

  function getArticles(searchQuery, index, count, minPrice, maxPrice, country){

    return $http.get(apiBase + 'search', {
      params: {
        searchQuery: searchQuery,
        index: index,
        count: count,
        minPrice: minPrice,
        maxPrice: maxPrice,
        country: country
      }
    });
  }
}
