(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('contactController', contactController);

    contactController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout', '$stateParams', '$rootScope'];
    function contactController($location, $http, $state ,  $window, $scope, $document, $timeout, $stateParams, $rootScope) {
        
        
        
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

$scope.getFeatured();
$scope.getPopular();
$scope.getnewarrival();
        
        $scope.Viewproduct = function (pid){
    
    $state.go('products', {Products : pid});
    
    
    
    
    
}
        
        $scope.goCart = function (proid){
           
            $scope.items2 = [];
            $scope.addproid = proid;
            $scope.items2 =  [$scope.addproid];
              $rootScope.cart_id = {
                    product_id:  $scope.items2,
                };
            
            
              $state.go('cart');
        }
        
         $scope.myCart = function (){
            
            
              $rootScope.cart_id = {
                    product_id:  $scope.items,
                };
            
            
              $state.go('cart');
        }
        
        // search controller starts
         
               $scope.getSearch = function (){
            
           
    $http.post('admin/app-services/php/get_search.php', $scope.getSearchdata)
       .success(function(data) {
        
        $scope.getSearchdata = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
         
         $scope.fetchProducts  = function() {
     //$scope.productName = "d";
if($scope.hello!=""){
     $scope.pname = $scope.productName;
   
     $http({
   method: 'post',
   url: 'admin/app-services/php/get_search.php',
   data: {searchText:$scope.hello}
  }).then(function successCallback(response) {
   $scope.prdNameList = response.data;
         console.log(response.data);
  });
 } else{
        $scope.prdNameList = [];

 }
}

         $scope.contactinfo = function (){
            
           
    $http.post('contactus/PHP/enquiry.php', $scope.contact)
       .success(function(data) {
        
       console.log("Succesfully mail Sent");
        window.alert("Succesfully mail Sent");
        $state.go("home");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
         
         
    
        
            
       
        
   
}
})();
