angular.module('API', [])

.factory('apiFactory', apiFactory);

apiFactory.$inject = ['$http'];

function apiFactory ($http) {
  var apiBase = "http://46.101.97.59:8080/";

  return {
    getArticles: getArticles,
    getApiBase: getApiBase

  };

  function getApiBase () {
    return apiBase;
  }

  /* user requests */

  function getArticles(searchQuery, index, count, minprice, maxprice){

    if(minprice && maxprice){
      return $http.get(apiBase + 'search', {
        params: {
          searchQuery: searchQuery,
          index: index,
          count: count,
          minprice: minprice,
          maxprice: maxprice
        }
      });
    }
    else if (maxprice) {
      return $http.get(apibase + 'search', {
        params: {
          searchQuery: searchQuery,
          index: index,
          count: count,
          maxprice: maxprice
        }
      });
    }
    else if (minprice) {
      return $http.get(apibase + 'search', {
        params: {
          searchQuery: searchQuery,
          index: index,
          count: count,
          minprice: minprice
        }
      });
    }
    else{
      return $http.get(apiBase + 'search', {
        params: {
          searchQuery: "hej",
          index: 2,
          count: 5
        }
      });
    }
  }
}
