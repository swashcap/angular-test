/* global FastClick */
'use strict';

angular.module('angularTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
]).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('articles', {
      url: '/articles',
      templateUrl: 'views/articles.html',
      controller: 'ArticlesCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
}]);

/**
 * Other plugin configurations.
 * @todo Move this to a separate file.
 */
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);