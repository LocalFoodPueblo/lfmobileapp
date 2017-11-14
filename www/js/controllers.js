angular.module('app.controllers', [])
  
.controller('localFoodPuebloCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('donateCtrl', ['$ionicPlatform', 
/*// Noodlio Pay
// Example with Checkout (Option 2)

// These are fixed values, do not change this
var NOODLIO_PAY_API_URL         = "https://noodlio-pay.p.mashape.com"; 
var NOODLIO_PAY_API_KEY         = "3fEagjJCGAmshMqVnwTR70bVqG3yp1lerJNjsnTzx5ODeOa99V";
var NOODLIO_PAY_CHECKOUT_KEY    = {test: "pk_test_gcx2DaFRtO2fenRKqkCK44lK", live: "pk_live_ZjOCjtf1KBlSHSyjKDDmOGGE"};

// Obtain your unique Stripe Account Id from here:
// https://www.noodl.io/pay/connect
var STRIPE_ACCOUNT_ID           = "<YOUR-UNIQUE-ID>";

// Define whether you are in development mode (TEST_MODE: true) or production mode (TEST_MODE: false)
var TEST_MODE = true;

angular.module('starter', ['ionic', 'stripe.checkout', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, StripeCheckoutProvider) {

  // Defines your checkout key
  switch (TEST_MODE) {
    case true:
      //
      StripeCheckoutProvider.defaults({key: NOODLIO_PAY_CHECKOUT_KEY['test']});
      break
    default:
      //
      StripeCheckoutProvider.defaults({key: NOODLIO_PAY_CHECKOUT_KEY['live']});
      break
  };

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  // Each tab has its own nav history stack:
  .state('dash', {
    url: '/dash',
    templateUrl: 'templates/example.html',
    controller: 'DashCtrl',
    resolve: {
      // checkout.js isn't fetched until this is resolved.
      stripe: StripeCheckoutProvider.load
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');

});
*/])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('findFoodCtrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_color || $scope.params.favorite_pizza){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
    $scope.showDelete = false;
    $scope.toggleDelete = function(){
        $scope.showDelete = !$scope.showDelete;
    }
    
    $scope.deleteItem = function($index){
        Survey.delete($scope.surveys[$index].id).then(function(){
            $scope.surveys.splice($index-1, 1);
        })
    }

}])
   
.controller('organizationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.organs = $stateOrgans;

}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('postCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('helpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutMeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('surveyCtrl', ['$scope', '$stateParams', 'Survey', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey, $ionicPopup) {

    $scope.data = {
        name: '',
        food: '',
        descr: '',
        website:'',
        phone: '',
        address: '',
        category: '',
        
        
    }

    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Survey.add($scope.data).then(function(){
            $scope.data = {
                name: '',
                food: '',
                descr: '',
                website:'',
                phone: '',
                address: '',
                category: '',
                
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: 'Thank you!',
                template: 'Your response has been recorded.'
            });
            
        })
    }

}])
   
.controller('informationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('updateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('resultsCtrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    //$scope.organs = $stateOrgans;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.food || $scope.params.descr){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }
    $scope.passData = function(){
        var organs = {
            food: $scope.fields.food
        }
    }

    $scope.loadData();
    
    $scope.showDelete = false;
    $scope.toggleDelete = function(){
        $scope.showDelete = !$scope.showDelete;
    }
    
    $scope.deleteItem = function($index){
        Survey.delete($scope.surveys[$index].id).then(function(){
            $scope.surveys.splice($index-1, 1);
        })
    }

}])
   
.controller('deletionCtrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.food || $scope.params.descr){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
    $scope.showDelete = false;
    $scope.toggleDelete = function(){
        $scope.showDelete = !$scope.showDelete;
    }
    
    $scope.deleteItem = function($index){
        Survey.delete($scope.surveys[$index].id).then(function(){
            $scope.surveys.splice($index-1, 1);
        })
    }

}])
   
.controller('searchCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.fields = {
        food: '',
 
    }
    
    $scope.search = function(){
        var params = {
            food: $scope.fields.food
        }
        
        /*
              @@+@@`                
         ,#     :`               
        :.       @               
        @         `              
      :@@@   @@;  +              
      @@;`@ @@@ @ ;              
      @@@@  :  ,, '              
      @  @;@  `   ,              
      @:''+@@@;`  ,        @'    
      ;           ,       @  :   
      #           :       @  @   
      '       `   @      #  `;   
      ;       ` , @      @ ``    
      +       ` : # @':;@   @    
      @       ` ; ;, ' ,`  @@@'  
      '       . ;    @, ,@' #:@' 
       ,        .   `      @ `@  
       @      ' ,#    `    `: @  
        ,      ,@@,         :#   
        @     @#,          '     
         @                 ;     
          @`          .  ,@      
           .@#`      '.,@,       
            , #@@@@# @           
            @;   @+; @           
         @'`:@   @ # @           
         ,., .    @  @           
          ,'@      .@@ 
        }*/

        
        $state.go('tabscontroller.results', params);
        
    }

}])
   
.controller('calendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('descriptionPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 