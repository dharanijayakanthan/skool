var app = angular.module('appRoutes', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/skool/preperation.html',
        controller: 'preperationCtrl',
        controllerAs: 'prep'
      })
      .when('/skool/preperation', {
        templateUrl: 'app/views/pages/skool/preperation.html',
        controller: 'preperationCtrl',
        controllerAs: 'prep'
      })
      .when('/searchSchool', {
        templateUrl: 'app/views/pages/skool/searchSchool.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true
      })
      .when('/register', {
        templateUrl: 'app/views/pages/register.html',
        controller: 'regCtrl',
        controllerAs: 'register',
        isAuthenticated: false
      })
      .when('/portfolio', {
        templateUrl: 'app/views/pages/portfolio.html',
        controller: 'appoinmentCtrl',
        controllerAs: 'appoinment'
      })
      .when('/login', {
        templateUrl: 'app/views/pages/login.html',
        isAuthenticated: false
      })
      .when('/logout', {
        templateUrl: 'app/views/pages/logout.html',
        isAuthenticated: true

      })
      .when('/fixAppoinment', {
        templateUrl: 'app/views/pages/fixAppoinment.html'
      })
      .when('/apply1', {
        templateUrl: 'app/views/pages/skool/apply1.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true

      })
      .when('/apply2', {
        templateUrl: 'app/views/pages/skool/apply2.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true

      })
      .when('/apply3', {
        templateUrl: 'app/views/pages/skool/apply3.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true

      })
      .when('/adminAccess', {
        templateUrl: 'app/views/pages/skool/skooladmin/adminAccess.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true
      })
      .when('/dashboard', {
        templateUrl: 'app/views/pages/skool/skooladmin/dashboard.html',
        controller: 'adminCtrl',
        controllerAs: 'admin',
        isAuthenticated: true
      })
      .when('/applicationView', {
        templateUrl: 'app/views/pages/skool/skooladmin/applicationView.html',
        controller: 'applicationViewCtrl',
        controllerAs: 'applicationv'
      })
      .when('/viewApplication',{
        templateUrl: 'app/views/pages/skool/skooladmin/viewApplication.html',
        controller: 'applicationViewCtrl',
        controllerAs: 'applicationv'
      })
      .when('/appoinmentView', {
        templateUrl: 'app/views/pages/skool/skooladmin/appoinmentView.html',
        controller: 'adminCtrl',
        controllerAs: 'admin'
      })
      .when('/schoolView', {
        templateUrl: 'app/views/pages/skool/skooladmin/schoolView.html',
        controller: 'adminCtrl',
        controllerAs: 'admin'
      })
      .when('/applicationSuccess', {
        templateUrl: 'app/views/pages/skool/applicationSuccess.html',
        controller: 'searchCtrl',
        controllerAs: 'search',
        isAuthenticated: true

      })
      .when('/addSchools',{
        templateUrl:'app/views/pages/skool/addSchools.html',
        controller: 'addSchoolsCtrl',
        controllerAs: 'addSchools',
        isAuthenticated: true
      })
      .otherwise({
        redirectTo: '/searchSchool'
      })
  });



//restricting routes

app.run(['$rootScope', 'auth', '$location', function($rootScope, auth, $location) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (next.$$route.isAuthenticated == false) {
      if (auth.isLoggedIn()) {
        event.preventDefault();
        $location.path('/');
      }
    } else if (next.$$route.isAuthenticated == true) {
      if (!auth.isLoggedIn()) {
        event.preventDefault();
        $location.path('/preperation');
      }
    }
  })
}]);
