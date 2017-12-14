angular.module('appoinmentController',['appoService','ngAnimate'])
.controller('appoinmentCtrl',function(appoinment,$timeout,$location,$http,$scope){

  var app = this;
  app.load=true;
  var items=['hi','hello','welcome','to','my','awesome','page'];
  console.log(items);
    this.fixAppoinment = function(appoinmentData){
      app.errorMessage = false;
      appoinment.createAppoinment(this.appoinmentData).then(function(data){

        if(data.data.success){
      app.successMessage = data.data.message;
      $timeout(function(){ $location.path('/register');},12000);

      }
      else{

          app.errorMessage = data.data.message;
      }
});
  };
})
