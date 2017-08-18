
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('ProductviewController', ProductviewController);

    ProductviewController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout', '$stateParams', '$rootScope'];
    function ProductviewController($location, $http, $state ,  $window, $scope, $document, $timeout, $stateParams, $rootScope) {
        
        

            
       $scope.catName = {};
        $scope.C = {};
      
        
        $scope.C.Category =  $rootScope.Cname.Category_name;

     
         $scope.AutoCat = function (){
           
    $http.post('admin/app-services/php/Get_Cat_products.php', $scope.C)
       .success(function(data) {
        
        $scope.products = data;
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
     
            
        }
         $scope.AutoCat();
        
        
        
   $scope.cat = function (data){
         
       $scope.catName.Category = data;  
           
    $http.post('admin/app-services/php/Get_Cat_products.php', $scope.catName)
       .success(function(data) {
        
        $scope.products = data;
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
   
   
   
   
   
   <!-- Viewproducts Start-->
        
        $scope.Viewproduct = function (pid){
    
    $state.go('products', {Products : pid});
            
                
}
            
            <!-- View Products End-->
        
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
