angular.module('mainController', ['authServices'])
  .controller('mainCtrl', function($http, $location, $timeout, auth, $rootScope) {
    var app = this;
    app.load = true;
    app.loadme = false;
    app.notLoaded = false;
    $rootScope.$on('$routeChangeStart', function() {
      //Check if the token is present
      if (auth.isLoggedIn()) {
        console.log("success token is there");
        auth.getUser().then(function(data) {
          app.isLoggedIn = true;
          app.username = data.data.username;
          app.loadme = true;
          app.notLoaded = true;
        });
      } else {
        app.isLoggedIn = false;
        console.log("error token not found");
        app.loadme = true;
        app.notLoaded = true;
      }
    })
    var app = this;
    this.login = function(loginData) {
      app.errorMessage = false;
      auth.login(this.loginData).then(function(data) {
        if (data.data.success) {
          app.successMessage = data.data.message;
          $timeout(function() {
            $location.path('/searchSchool');
          }, 2000);
        } else {
          app.errorMessage = data.data.message;
        }
      });
    };
    //Log out
    this.logout = function() {
      var set = auth.isLoggedOut();
      if (set) {
        app.errorMessage = "It looks like you have logged out please login again to continue.. ";
        app.successMessage = "";
        $timeout(function() {
          $location.path('/login');
        }, 2000);
      }
    }
  })
