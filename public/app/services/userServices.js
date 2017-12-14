angular.module('userService',[]).factory('user',function($http){
var userFactory = {};
//user.create()
userFactory.create = function(regData){
  return $http.post('/api/users',regData);
}
return userFactory;
});
