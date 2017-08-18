var app = angular.module("MyApp", [ 
									'ui.router',
									'ngRoute',
									'ngAnimate',
									'ngSanitize', 
									'ngCookies',                                                                
                                    'ui.bootstrap',
                                    'yc.navbar.affix'
                                    ]);
									
app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

	localStorage.clear();
	$httpProvider.defaults.headers.post = {};
	$stateProvider
	
	.state('home', {
		url : '/home',
		templateUrl : 'home/dashboard.html',
		controller : 'DashboardController',
		controllerAs : 'vm'
	})
    
    .state('about', {
		url : '/about',
		templateUrl : 'aboutus/about.html',
		controller : 'aboutController',
		controllerAs : 'vm'
	})
    
    .state('contact', {
		url : '/contact',
		templateUrl : 'contactus/contact.html',
		controller : 'contactController',
		controllerAs : 'vm'
	})
    
    .state('products', {
		url : '/products/:Products',
		templateUrl : 'products/product.html',
		controller : 'productController',
		controllerAs : 'vm'
	})
    
    .state('products_view', {
		url : '/products_view',
		templateUrl : 'Products_view/product_view.html',
		controller : 'ProductviewController',
		controllerAs : 'vm'
	})
    
    .state('cart', {
		url : '/cart',
		templateUrl : 'cart/cart.html',
		controller : 'cartcontroller',
		controllerAs : 'vm'
	})
    
    
	

	$urlRouterProvider.otherwise('/home');

}
);

app.directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) { 
          
            $scope.$watch( function() { 
                    return $scope.$eval($attrs.setNgAnimate, $scope); 
                }, function(valnew, valold){
                    $animate.enabled(!!valnew, $element);
            });  
            
            
        }
    };
}]);


