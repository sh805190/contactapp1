angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contact.name1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/name1.html',
        controller: 'name1Ctrl'
      }
    }
  })

  .state('contact', {
    url: '/side-menu21',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});