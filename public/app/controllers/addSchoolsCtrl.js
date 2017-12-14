angular.module('addSchoolsController', ['addSchoolsService'])
.controller('addSchoolsCtrl', function(addService){
var app = this;
this.schoolAdd = function(schoolData) {
  console.log(schoolData);
  addService.schoolAdd(schoolData).then(function(data){
console.log(data);
  });
}

})
