angular.module('adminController',[])
.controller('adminCtrl',function($timeout,$location){

var app = this;

this.applicationView = function(){
  $timeout(function(){$location.path('/applicationView')},2000);
}

this.appoinmentView = function(){
$timeout(function(){
  $location.path('appoinmentView');
},2000);
}

this.schoolView = function(){
    $timeout(function(){
    $location.path('schoolView');
  },2000);
}

})
