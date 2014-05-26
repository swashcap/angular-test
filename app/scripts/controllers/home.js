'use strict';

angular.module('angularTestApp')
  .controller('HomeCtrl', ['$scope', 'Feed', function ($scope, Feed) {
    $scope.feed = new Feed(1);

    $scope.feed.nextPage();
  }]);