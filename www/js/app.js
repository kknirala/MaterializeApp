var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
       
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
			controller: 'homeCtrl'
        })
        
      
        .state('list', {
            url: '/list',
            templateUrl: 'views/partial-home-list.html'
       
        })

     
        .state('about', {
            url: '/about',
			templateUrl: 'views/about.html',
			 controller: 'scotchController'
            
        });
        
});
/*
routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
}); 

var sobject = {location: "454", locName: "AIKKARANADU", selCity: "ERNAKULAM",type: "C", keywords: "", date: "", sport:""};


function searchList(){
		$scope.currentpage = 0;
		$scope.last = 0;
		$scope.tcount = 0;
		$http.post(http://216.189.55.111:3002/search",$.param(sobject), {
				headers : {
					'Client-Security-Token' : '',
					'APPREQ': 'true',
					'LAT' : -1,
					'LON' : -1,
					'SCDate': new Date().toString()
				})
		.then(function(response){
			if(response.data.message) {
				slist = response.data.data;
				type_count = response.data.type_count;
				$scope.tcount = slist.length;
				if(slist.length<=0){
					$scope.dataLoading = false;	
					$scope.empty = true;
					$scope.profiles = [];
				}
				else{
					fetchIds();
					$scope.empty = false;
				}
			}
		});
	}
	searchList()
	function fetchIds(){
		ids = [];
		if(gfl){
			gfl = false;
			$scope.next('n');
			return;
		}
		if(slist.length>10){
			$scope.shownxt = true;
			$scope.hasFooter = 'has-footer';
			$scope.showfooter = true;
		} 
		var l = 0;
		while(l < slist.length )
		{
			ids[l] = slist[l].id;
			l++;
			$scope.last = l;
			if(l>9)
				break;
		}
		getProfiles();
	}
	function getProfiles() {
		$scope.profiles =[];
		SLAPI.post(ahost+'profiles',{ids: ids.join(',')})
		.then(function(response){
			if(response.data.message == 'success') {
				$scope.dataLoading = false;	
				angular.forEach(response.data.profiles,function(institute){
					if(institute.image_url.substr(0,1)== '/') institute.image_url=shost+institute.image_url;
					else institute.image_url=ahost+institute.image_url;	
				}); 
				$scope.profiles = response.data.profiles;
			}
		});
	}	
	 */