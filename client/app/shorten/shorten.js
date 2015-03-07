angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your cøde here
  $scope.link = {
    url: ''
  };

  $scope.addLink = function (link) {
    // run links.add link
    // want to have a shortening method too or something?
    $scope.link.url = link;

    Links.postLink($scope.link);

    // redirect to links
    // stuff .do
    Links.linksRedirect();
  }
});
