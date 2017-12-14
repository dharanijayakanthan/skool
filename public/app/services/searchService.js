angular.module('searchService',[]).factory('search',function($http){
searchFactory = {};
var arra = new Array();
searchFactory.getResults = function(searchData){
    return $http.post('/api/search',searchData);
}
searchFactory.adminFind = function(adminKey){
  console.log(adminKey);
  return $http.post('/api/adminaccess',adminKey);
}
searchFactory.saveThis = function(data){
arra.push(data);
return arra;
}
searchFactory.saveApplication = function(applicationData){
return $http.post('/api/application',applicationData);
}
return searchFactory;
})
