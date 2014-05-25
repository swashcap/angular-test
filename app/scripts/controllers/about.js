'use strict';

angular.module('angularTestApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.clients = [{
      name: 'Google',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'Twitter',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'Target',
      logo: '/images/logo-3.jpg'
    }, {
      name: 'Coca Cola',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'Apple',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'Starbucks',
      logo: '/images/logo-3.jpg'
    }, {
      name: 'Ford',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'NBA',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'Nike',
      logo: '/images/logo-3.jpg'
    }, {
      name: 'AirBnB',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'Route 66',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'Macys',
      logo: '/images/logo-3.jpg'
    }, {
      name: 'Nestle',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'Ikea',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'Boeing',
      logo: '/images/logo-3.jpg'
    }, {
      name: 'Apple Records',
      logo: '/images/logo-1.jpg'
    }, {
      name: 'Safeway',
      logo: '/images/logo-2.jpg'
    }, {
      name: 'You!',
      logo: '/images/logo-3.jpg'
    }];
  }]);