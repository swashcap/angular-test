'use strict';

angular.module('angularTestApp')
  .factory('Feed', ['$http', function ($http) {
    // Build a request URL
    function _getFormattedUrl(id, page) {
      var url = './api/feeds/' + id;

      if (page) {
        url += '/' + page;
      }
      url += '.json';

      return url;
    }

    /** @link http://sroze.github.io/ngInfiniteScroll/demo_async.html */
    var Feed = function (id) {
      this.id = id;
      this.articles = [];
      this.name = '';
      this.favicon = '';

      this.busy = false;
      this.page = 0;
    };

    // Get feed's next page of articles
    Feed.prototype.nextPage = function () {
      if (this.busy) {
        return;
      }
      this.busy = true;

      var url = _getFormattedUrl(this.id, this.page);

      $http.get(url).success(function (data) {
        // Set name, favicon
        if (data.title) {
          this.name = data.title;
        }
        if (data.subtitle) {
          this.subtitle = data.subtitle;
        }
        if (data.favicon) {
          this.favicon = data.favicon;
        }

        var articles = data.articles;
        for (var i = 0; i < articles.length; i++) {
          this.articles.push(articles[i]);
        }

        this.page++;
        this.busy = false;
      }.bind(this));
    };

    return Feed;
  }]);