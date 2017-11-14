angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabscontroller.localFoodPueblo', {
    url: '/index',
    views: {
      'tab1': {
        templateUrl: 'templates/localFoodPueblo.html',
        controller: 'localFoodPuebloCtrl'
      }
    }
  })

  .state('tabscontroller.donate', {
    url: '/donate',
    views: {
      'tab3': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabscontroller', {
    url: '/page2',
    templateUrl: 'templates/tabscontroller.html',
    abstract:true
  })

  .state('findFood', {
    url: '/findFood',
    templateUrl: 'templates/findFood.html',
    controller: 'findFoodCtrl'
  })

  .state('organization', {
    url: '/organization',
    templateUrl: 'templates/organization.html',
    controller: 'organizationCtrl'
  })

  .state('tabscontroller.map', {
    url: '/map',
    views: {
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabscontroller.post', {
    url: '/post',
    views: {
      'tab1': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabscontroller.help', {
    url: '/help',
    views: {
      'tab1': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('tabscontroller.aboutMe', {
    url: '/aboutme',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutMe.html',
        controller: 'aboutMeCtrl'
      }
    }
  })

  .state('tabscontroller.survey', {
    url: '/add',
    views: {
      'tab1': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      }
    }
  })

  .state('information', {
    url: '/info',
    templateUrl: 'templates/information.html',
    controller: 'informationCtrl'
  })

  .state('update', {
    url: '/update',
    templateUrl: 'templates/update.html',
    controller: 'updateCtrl'
  })

  .state('tabscontroller.results', {
    url: '/page12',
	params: {
		food: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('tabscontroller.deletion', {
    url: '/page18',
	params: {
		name: "",
		favorite_color: "",
		favorite_pizza: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/deletion.html',
        controller: 'deletionCtrl'
      }
    }
  })

  .state('tabscontroller.search', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('calendar', {
    url: '/page15',
    templateUrl: 'templates/calendar.html',
    controller: 'calendarCtrl'
  })

  .state('tabscontroller.descriptionPage', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/descriptionPage.html',
        controller: 'descriptionPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page2/index')

  

});