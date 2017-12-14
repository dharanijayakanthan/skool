angular.module('applicationViewController', ['applicationViewService'])
  .controller('applicationViewCtrl', function(applicationview, $location, $timeout, $scope, $rootScope, $window) {
    var app = this;
    //view a particular application
    this.view = function(viewData) {
      app.applicationvData = viewData;
      app.obj = {
        vData: app.applicationvData
      };
      applicationview.getView(app.obj).then(function(data) {
        $location.path('/viewApplication');
        applicationview.setViData(data.data);
      })
    }
    //passing data to that one particular view
    this.dance = function() {
      app.vi = applicationview.getViData();
      console.log(app.vi[0]);
      //app.vi[0];
    }
    this.printIt = function(){
       $timeout($window.print, 0);
    }
    // load all applications into the view
    this.loadmore = function() {
      applicationview.getApplication().then(function(data) {
        app.applicationData = new Array(data.data.length);
        for (var i = 0; i < app.applicationData.length; i++) {
          app.applicationData[i] = data.data[i];
        }
        for (var i = 0; i < app.applicationData.length; i++) {
          console.log(app.applicationData[i].studentname);
        }
      })
    }
  })
