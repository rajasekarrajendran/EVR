(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('cartcontroller', cartcontroller);

    cartcontroller.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout', '$stateParams', '$rootScope', '$uibModal'];
    function cartcontroller($location, $http, $state ,  $window, $scope, $document, $timeout, $stateParams, $rootScope, $uibModal) {
        
        
        
          $scope.cartid = {};
         $scope.cartid=$rootScope.cart_id.product_id;   
         
    $scope.getCart = function (){
            $scope.total=0;
           
    $http.post('admin/app-services/php/get_cart_detail.php', $scope.cartid)
       .success(function(data) {
        
        $scope.getcartdata = data;
        $scope.getData=[];
        angular.forEach($scope.getcartdata, function(value, key) {
              $scope.total=parseInt($scope.total)+parseInt(value.product_price); 
              $scope.getData.total = $scope.total;
                $scope.getData.push({
                    product_id: value.product_id,
                    product_img: value.product_img,
                    product_name: value.product_name,
                    product_price : value.product_price,
                    product_qty : 1
                })
        })

       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
    
    
      $scope.getCart();
        
        
  $scope.qty = 1;
  $scope.increment = function(index) {
   $scope.getData[index].product_qty++;
         $scope.total = $scope.total + parseInt($scope.getData[index].product_price);
      $scope.getData.total = $scope.total;
    
  };
  $scope.decrement = function(index) {
      if ($scope.getData[index].product_qty > 1){
            $scope.getData[index].product_qty--;
            $scope.total = $scope.total - parseInt($scope.getData[index].product_price);
           $scope.getData.total = $scope.total;
      }
      };
        
        
        $scope.viewprofile = function(data, size) {
        $scope.itemsData = data;  
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'popupModal.html',
                        size: size,
                        resolve: {
                            items: function () {
                            return $scope.itemsData;
                            }
                        },
        controller: function($scope, items) {
             $scope.itemsData = {};
              $scope.delivery = {};
             $scope.itemsData = items;
            
                $scope.steps = [
    'Step 1: Product Info',
    'Step 2: Delivery Address',
    'Step 3: Payment'
  ];
  $scope.selection = $scope.steps[0];

  $scope.getCurrentStepIndex = function(){
    // Get the index of the current step given selection
    return _.indexOf($scope.steps, $scope.selection);
  };
  // Go to a defined step index
  $scope.goToStep = function(index) {
    if ( !_.isUndefined($scope.steps[index]) )
    {
      $scope.selection = $scope.steps[index];
    }
  };

  $scope.hasNextStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var nextStep = stepIndex + 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[nextStep]);
  };

  $scope.hasPreviousStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var previousStep = stepIndex - 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[previousStep]);
  };

  $scope.incrementStep = function() {
      
    
      
    if ( $scope.hasNextStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var nextStep = stepIndex + 1;
      $scope.selection = $scope.steps[nextStep];
    }
  };

  $scope.decrementStep = function() {
    if ( $scope.hasPreviousStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var previousStep = stepIndex - 1;
      $scope.selection = $scope.steps[previousStep];
    }
  };
            

            
  $scope.OrdertoMail = function (data){
       $scope.or= {};
      $scope.contact = {};
    //  $scope.or.orderDetails={};
        
  //$scope.or.orderDetails.product = data;
  //$scope.or.orderDetails.contact =  $scope.delivery;
      var OrderDetails = {
                          orderinfo: {
                              name: $scope.delivery.name,
                              email: $scope.delivery.email,
                              mobile: $scope.delivery.mobile,
                              address: $scope.delivery.address,
                              pincode: $scope.delivery.pincode,
                             },
          
                           productInfo: $scope.itemsData
          
                         };
           
                   var fd = new FormData();
                   fd.append("orderinfo", angular.toJson(OrderDetails.orderinfo, true));
                   fd.append("productInfo", angular.toJson(OrderDetails.productInfo, true));
                   //fd.append("file", data.file);
    $http.post('admin/app-services/php/order.php', fd)
       .success(function(data) {
    
     
       console.log("Succesfully sent");
        window.alert("Successfully Order Placed");
        modalInstance.close();
        $state.go("home");

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
    
  $scope.ok = function(){
                modalInstance.close();
            }
         
  }
                    });
modalInstance.result.then(function(profiles) {
        $scope.prof = profiles;
    });
}
        
     $scope.fetchProducts  = function() {
     //$scope.productName = "d";

     $scope.pname = $scope.productName;
   
     $http({
   method: 'post',
   url: 'admin/app-services/php/get_search.php',
   data: {searchText:$scope.hello}
  }).then(function successCallback(response) {
   $scope.prdNameList = response.data;
         console.log(response.data);
  });
 }
  
                 
        
   
}
})();