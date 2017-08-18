
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('DashboardController', DashboardController);
        

    DashboardController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document' , '$timeout', '$rootScope',  '$animate', '$anchorScroll'];
    function DashboardController($location, $http, $state ,  $window, $scope, $document, $timeout, $rootScope, $animate, $anchorScroll) {
        // toggle collapse starts
      
        
        $scope.navbarCollapsed = true;
      
        
        
  //tabs container controller starts
         
         $scope.invoice =[];
         $scope.items = [];
       
 
        //$scope.invoice = {};
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
        
        //carousel slidder controller end
        
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
            
           
    $http.get('admin/app-services/php/get_tabs.php')
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
            
           
    $http.get('admin/app-services/php/get_tabs1.php')
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
            
           
    $http.get('admin/app-services/php/get_tabs2.php')
       .success(function(data) {
        
        $scope.newarr = data;
        
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
    
    
            
        }
// banner image controller starts
$scope.slideImageTiming = 4000;
$scope.noWrapSlides = false;
$scope.active = 0;
$scope.getbanner = function (){
    $http.get('admin/app-services/php/get_banner.php')
       .success(function(data) {
            $scope.slides = data;
            console.log("Succesfully get");
        }).error(function(data, status, headers, config) {
            // log error
            console.log("Error");
   });
}
// banner image controller end

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

$scope.Viewproduct = function (pid){
    
    $state.go('products', {Products : pid});
    
    
    
    
    
}

$scope.cat = function (catName){
    
    
     $rootScope.Cname = {
                    Category_name: catName,
                };
    
    
    $state.go('products_view');
    
    
    
    
    
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

/*
 // Set value to search box
 $scope.setValue = function(index){
  $scope.searchText = $scope.searchResult[index].name;
  $scope.searchResult = {};
 }
*/
  $scope.isDisabled = false;


 $scope.addItem = function (proid) { 
     $scope.addproid = proid;
      $scope.isDisabled = true;
     
        $scope.invoice.items.push({ 
            qty: 1,
            product: { id: $scope.addproid } });
    };

        $scope.goCart = function (){
            
            
              $rootScope.cart_id = {
                    product_id:  $scope.items,
                };
            
            
              $state.go('cart');
        }




$scope.getcategory();
$scope.getFeatured();
$scope.getnewarrival();
$scope.getPopular();
        
//$scope.getbanner();
        
        
        
        
        
  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
         $http.get('admin/app-services/php/get_banner.php')
       .success(function(data) {
             $scope.slidesImg = {};
         var newWidth = 600 + slides.length + 1;
        $scope.slides = data;
             
     
       
       console.log("Succesfully get");
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                            
                              console.log("Error");
                           });
   
   
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };
  $scope.banNum = 0;
  for (var i = 0; i < 1; i++) {
      
    $scope.banNum =   $scope.banNum +1;
    $scope.addSlide();
      
  }


  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
        
        // Scroll up Controller starts
        
           $scope.goTop = function(){
        angular.element("#scrollup").scrollTop=0;
          
        }
        
        
        
        // Scroll up controller end

        


        
   
}
  


})();
