var polls = angular.module('polls', ['ngRoute', 'pollServices']);
polls.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/polls', {
		templateUrl: 'partials/list.html',
		controller: 'PollListController'
	})
	.when('/poll/:pollId', {
		templateUrl: 'partials/item.html',
		controller: 'PollItemController'
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'PollNewController'
	})
	.otherwise({ redirectTo: '/polls' });
}]);