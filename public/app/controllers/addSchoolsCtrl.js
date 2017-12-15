angular.module('addSchoolsController', ['addSchoolsService'])
.controller('addSchoolsCtrl', function(addService,$timeout,$location){
var app = this;
this.schoolAdd = function(schoolData) {

  addService.schoolAdd(schoolData).then(function(data){
      console.log(data);
    if(data.data.success == true){
      $timeout(function(){
        $location.path('/applicationSuccess');
      },200);
    }
    else {
      $timeout(function(){
        $location.path('/applicationFailure');
      },200);
    }
  });
}
})
