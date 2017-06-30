var app = angular.module("MyApp", [ 
									'ui.router',
									'ngRoute',
									'ngAnimate',
									'ngSanitize', 
									'ngCookies',
                                    
                                    'ui.bootstrap' ]);
									
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
	

	$urlRouterProvider.otherwise('/home');

}
);


