
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout'];
    function DashboardController($location, $http, $state ,  $window, $scope, $document, $timeout) {
        
  //tabs container controller starts
        
        $scope.tabs = [
    { title:'Popular Products', content:'Dynamic content 1' },
    { title:'New Arrivals', content:'Dynamic content 2' }
  ];
        
       
  // carousel slidder controller starts      
var slidesInSlideshow = 3;
 var slidesTimeIntervalInMs = 1000; 
       
  
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);
        
        $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    
  };
        
    $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
        

        
$scope.getFeatured = function (){
            
           
    $http.get('http://localhost/newdash1/app-services/php/get_tabs.php')
       .success(function(data) {
        
        $scope.products = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
$scope.getPopular = function (){
            
           
    $http.get('http://localhost/newdash1/app-services/php/get_tabs1.php')
       .success(function(data) {
        
        $scope.popular = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
$scope.getnewarrival = function (){
            
           
    $http.get('http://localhost/newdash1/app-services/php/get_tabs2.php')
       .success(function(data) {
        
        $scope.newarr = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
// banner image controller

$scope.getbanner = function (){
            
           
    $http.get('http://localhost/newdash1/app-services/php/get_banner.php')
       .success(function(data) {
        
        $scope.bannerimg = data;
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }


$scope.getFeatured();
$scope.getnewarrival();
$scope.getPopular();
        
$scope.getbanner();

        
   
}
  


})();
