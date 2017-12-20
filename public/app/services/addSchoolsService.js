angular.module('addSchoolsService',[])
.factory('addService',function($http){
  addSchoolsFactory = {};
addSchoolsFactory.schoolAdd = function(schoolData){
  return $http.post('/api/addSchools',schoolData);
}
  return addSchoolsFactory;
})
