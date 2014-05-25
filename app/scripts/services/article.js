'use strict';

angular.module('angularTestApp')
  .factory('article', ['$http', function ($http) {
    var articleEndpoint = '/api/articles.json';

    // Format URLs
    var formatRequestUrl = function (id) {
      var append = (id) ? '/' + id : '';
      return articleEndpoint + append;
    };

    // Make requests to server's article API
    var request = function (method, id) {
      return $http({
        'method': method,
        url: formatRequestUrl(id)
      });
    };

    // Public API here
    return {
      get: function (id) {
        return request('GET', id);
      },
      update: function (id) {
        return request('POST', id);
      },
      delete: function (id) {
        return request('DELETE', id);
      }
    };
  }]);
