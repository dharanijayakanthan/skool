angular.module('appoService',[]).factory('appoinment',function($http){
appoinmentFactory = {};
//user.create()
appoinmentFactory.createAppoinment = function(appoinmentData){
  return $http.post('/api/appoinment',appoinmentData);
}
return appoinmentFactory;
});
