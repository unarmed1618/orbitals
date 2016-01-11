'use strict';

angular.module('orbitalApp.auth', [
  'orbitalApp.constants',
  'orbitalApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
