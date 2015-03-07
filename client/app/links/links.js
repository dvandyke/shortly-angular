angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {
    links: []
  };
  //var links = $scope.data.links;


  $scope.getLinks = function(){

    Links.getLinks().then(function(promise){
      $scope.data.links = promise;
      console.log('promise', $scope.data.links);
    });

  };
  $scope.getLinks();
});
