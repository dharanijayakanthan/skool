angular.module('userController', ['userService'])

  .controller('regCtrl', function($http, $location, $timeout, user) {
    var app = this;
    app.load = true;

    this.regUser = function(regData) {
      app.errorMessage = false;
      user.create(this.regData).then(function(data) {
        if (data.data.success) {
          console.log(data);
          app.successMessage = data.data.message;
          $timeout(function() {
            $location.path('/login');
          }, 2000);
        } else {
          app.errorMessage = data.data.message;
        }
      });
    };
  })
