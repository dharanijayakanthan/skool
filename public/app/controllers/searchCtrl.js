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
        console.log(data.data);

$scope.schoolCollection = new Array(data.data.schools.length);
        for(var i = 0; i<data.data.schools.length; i++)
        {
        $scope.schoolCollection[i] = data.data.schools[i];
       $scope.schoolCollection[i];
        }
      /*  $scope.schoolName = new Array(1);
        $scope.schoolMode = new Array(1);
        $scope.schoolDescription = new Array(1);
        $scope.schoolAddress = new Array(1);
        $scope.schoolClasses = new Array(1);
        $scope.schoolCity = new Array(1);
        $scope.schoolType = new Array(1);
        $scope.schoolApplication = new Array(1);


        app.loadMore = function() {
          for (i = 0; i < 10; i++) {
            $scope.schoolName[i] = data.data.schoolname[i].schoolname;
            $scope.schoolMode[i] = data.data.schoolname[i].schoolmode;
            $scope.schoolDescription[i] = data.data.schoolname[i].schooldescription;
            $scope.schoolAddress[i] = data.data.schoolname[i].schooladdress;
            $scope.schoolClasses[i] = data.data.schoolname[i].schoolclasses;
            $scope.schoolCity[i] = data.data.schoolname[i].schoolcity;
            $scope.schoolType[i] = data.data.schoolname[i].schooltype;
            $scope.schoolApplication[i] = data.data.schoolname[i].schoolapplication;

          }
        } */
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
