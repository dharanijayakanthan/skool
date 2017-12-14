angular.module('applicationViewService',[])
.factory('applicationview',function($http){
applicationviewfactory = {};
var viDataOne = new Array();
applicationviewfactory.getApplication = function(){
return $http.post('/api/getApplication');
}
applicationviewfactory.getView = function(viewData){
  return $http.post('/api/getView',viewData);
}
applicationviewfactory.setViData = function(viData){
  viDataOne.push(viData);
}
applicationviewfactory.getViData = function(){
  return viDataOne;
}
return applicationviewfactory;

})
