angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your cºde here
  //$scope.data.links = [];
  $scope.data = {
    links: [9]
  };
  console.log(Links);
  // Links = [];
  // Links.push($scope.data);
  // Links.push($scope.data);
  // console.log(Links);

  // add scope data to Links ? in add fnction

  $scope.getLinks = function(){

    Links.getLinks().then(function(promise){
      console.log('promise me EVERYTHING:', promise);
      $scope.data.links = promise;
    });
    //return 9;

    // $scope.data.links = Links.links().then(function(res){
    //   console.log('res', res);
    //   $scope.data.links = res;
    // });

    //console.log("AFTER: ", $scope.data.links);
  };
  $scope.getLinks();
});
