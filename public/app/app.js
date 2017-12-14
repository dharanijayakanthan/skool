angular.module('userApp',['ngAnimate','applicationViewController','applicationViewService','appRoutes','userController','mainController','userService','authServices','appoinmentController','appoService','preperationController','searchController','searchService','adminController','addSchoolsController','addSchoolsService'])
.config(function($httpProvider){
$httpProvider.interceptors.push('authInter');
})
