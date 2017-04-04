angular.module('myApp', [])

.factory('Hotels' , function($http){
  var getData = function(){
    return $http({
      method: 'GET',
      url: '/api/expedia'
    }).then(function(result){
     return result.data;
   }).catch(function(err){
    throw err;
  })
 }; 
 
 return {
  getData:getData
}
})


.controller('HotelsController', function($scope , Hotels){
  $scope.checked = false; 
  $scope.all = Hotels.getData().then(function(val){
    $scope.hotels = val
  })

  $scope.filter = function(query){
   $scope.hotels = $scope.hotels.filter(function(elem,index) {
     return elem.destination.city.toLowerCase().indexOf(query.toLowerCase()) > -1;
   })
 }

});
