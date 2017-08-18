
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('productController', productController);

    productController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout', '$stateParams', '$rootScope'];
    function productController($location, $http, $state ,  $window, $scope, $document, $timeout, $stateParams, $rootScope) {
        
        $scope.Pro_details = {};
        $scope.Pro_details.products = $stateParams.Products;

             
$scope.getcategory = function (){
            
           
    $http.get('admin/app-services/php/get_category.php')
       .success(function(data) {
        
        $scope.categories = data;
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }

$scope.getcategory();
        
     
        
         $scope.getproducts = function (){
            
           
    $http.post('admin/app-services/php/Get_Pro.php', $scope.Pro_details)
       .success(function(data) {
        
        $scope.products = data[0];
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
         $scope.getproducts();
        
       
        
        $scope.getFeatured = function (){
            
           
    $http.get('admin/app-services/php/get_tabs.php')
       .success(function(data) {
        
        $scope.products1 = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
        $scope.getFeatured();
        
    
        
      
        $scope.getPopular = function (){
            
           
    $http.get('admin/app-services/php/get_tabs1.php')
       .success(function(data) {
        
        $scope.popular1 = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
        $scope.getPopular();
            
        
      
        $scope.getnewarrival = function (){
            
           
    $http.get('admin/app-services/php/get_tabs2.php')
       .success(function(data) {
        
        $scope.newarr1 = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
        
        $scope.getnewarrival();
        
        
        
        $scope.Viewproduct = function (pid){
    
    $state.go('products', {Products : pid});
            
                
}
        
         $scope.items = [];
         $scope.invoice = [];
        
         $scope.addItem = function (proid) { 
     $scope.addproid = proid;
     
        $scope.invoice.items.push({ 
            qty: 1,
            product: { id: $scope.addproid } });
    };

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

        
   
}
})();
