angular.module('searchController', ['searchService', 'infinite-scroll'])
  .controller('searchCtrl', function(search, $timeout, $location, $http, $scope) {
    /**
          $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
          $scope.loadMore = function() {
            var last = $scope.images[$scope.images.length - 1];
      if($scope.images.length < 150){
            for(var i = 1; i <= 8; i++) {
              $scope.images.push(last + i);
            }
          }
        };
    **/
    var app = this;
    // back feature in successmessage
    this.back = function() {
      $location.path('/searchSchool');
    }
    //when parents click apply
    this.apply = function(applySchoolName) {
      $timeout(function() {
        $location.path('/apply1');
      }, 1000);
    }
    //wizard-1
    this.saved1 = function(savedData) {
      $location.path('/apply2');
      search.saveThis(savedData);
    }
    //wizard-2
    this.saved2 = function(savedData) {
      $location.path('/apply3')
      search.saveThis(savedData);
    }
    //wizard-3
    this.submit = function(savedData) {
      $location.path('/applicationSuccess');
      $scope.arr = search.saveThis(savedData);
      //  console.log($scope.arr);
      search.saveApplication($scope.arr);
    }
    this.searchfn = function(searchData) {
      search.getResults(this.searchData).then(function(data) {
        //  var length = data.data.schoolname.length;
       $scope.noSchools = false;
      $scope.yesSchools = false;

        if(data.data.schools.length == 0){
          $scope.noSchools = true;

        }
        else if(data.data.schools.length != 0){
          $scope.yesSchools = true;
   
        $scope.schoolCollection = new Array(data.data.schools.length);
        for(var i = 0; i<data.data.schools.length; i++)
        {
        $scope.schoolCollection[i] = data.data.schools[i];
       $scope.schoolCollection[i];
        }
      }
      })
    }
    var adminKey = {};
    //admin access key controller
    this.adminAccess = function() {
       adminKey = {
      "password" : this.adminKey
      }
      search.adminFind(adminKey).then(function(data) {
        if (data.data.success) {
          $location.path('/dashboard');
          app.successMessage = data.data.message;
        }
        else{
          app.errorMessage = data.data.message;
        }
      });
    }
  })
