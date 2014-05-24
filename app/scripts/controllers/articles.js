'use strict';

angular.module('angularTestApp')
  .controller('ArticlesCtrl', ['article', '$scope', function (article, $scope) {
    // Get articles, add to scope
    article.get()
      .then(function (articles) {
        $scope.articles = articles.data;
        //$scope.articles = articles;
        //$scope.$$phase || $scope.$apply();
        //$rootScope.$$phase || $rootScope.$apply();
        //$scope.$apply(function () {});//articles = articles;
      })
      .catch(function (data) {
        console.log('Could not get articles', data);
      });


    //console.log(articles);
    //$scope.articles = article.get();
  }]);
