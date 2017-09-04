routerApp.controller('homeCtrl', function ($rootScope, $scope) {
	$scope.cur_view = 'f';
	
var date = new Date();
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	$scope.facilities = [
							{'img':'img/background1.jpg', 'loc':'HSR sector 1','name':'Pretty Hate Machine ','des':'Nine Inch Nails,Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails.Nine Inch Nails','booking':'Y'},
							{'img':'img/background2.jpg','loc':'HSR sector 1','name':'Pretty Hate Machine 1','des':'Four Inch Nails','booking':'N'},
							{'img':'img/background3.jpg','loc':'HSR sector 5','name':'Pretty Hate Machine 2','des':'Three Inch Nails','booking':'Y'},
							{'img':'img/background1.jpg','loc':'HSR sector 4','name':'Pretty Hate Machine','des':'Nine Inch Nails','booking':'N'},
							{'img':'img/background2.jpg','loc':'HSR sector 3','name':'Pretty Hate Machine 1','des':'Four Inch Nails','booking':'Y'},
							{'img':'img/background3.jpg','loc':'HSR sector 12','name':'Pretty Hate Machine 2','des':'Three Inch Nails','booking':'N'},
							{'img':'img/background1.jpg','loc':'HSR sector 11','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','loc':'HSR sector 12','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','loc':'HSR sector 13','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','loc':'HSR sector 1','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','loc':'HSR sector 14','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','loc':'HSR sector 14','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','loc':'HSR sector 13','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','loc':'HSR sector 12','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','loc':'HSR sector 11','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','loc':'HSR sector 10','name':'Pretty Hate Machine 3','des':'Two Inch Nails'}
						];
	$scope.coaches = [
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 3','des':'Four Inch Nails'},
							{'img':'img/background2.jpg','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','name':'Pretty Hate Machine 1','des':'Two Inch Nails'},
							{'img':'img/background1.jpg','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background1.jpg','name':'Pretty Hate Machine','des':'Nine Inch Nails'},
							{'img':'img/background2.jpg','name':'Pretty Hate Machine 1','des':'Four Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 2','des':'Three Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 3','des':'One Inch Nails'},
							{'img':'img/background3.jpg','name':'Pretty Hate Machine 3','des':'One Inch Nails'}
						];
	
	$scope.viewChange = function(v){
		$scope.cur_view = v;
	}
});
