angular.module('NoteWrangler').config(function($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/notes'
		})

		.when('/notes', {
			templateUrl: "assets/templates/notes/index.html",
			controller: "NotesIndexController",
			controllerAs: 'index'
		})

		.when('/notes/new', {
			templateUrl: "assets/templates/notes/new.html",
			controller: "NotesCreateController",
			controllerAs: 'create'
		})

		.when('/notes/:id', {
			templateUrl: "assets/templates/notes/show.html",
			controller: "NotesShowController",
			controllerAs: 'show'
		})

		.when('/notes/:id/edit', {
			templateUrl: "assets/templates/notes/edit.html",
			controller: "NotesEditController",
			controllerAs: 'edit'
		})

		.when('/users', {
			templateUrl: "assets/templates/users/index.html",
			controller: "UsersIndexController",
			controllerAs: 'index'
		})

		.when('/users/:id', {
			templateUrl: "assets/templates/users/show.html",
			controller: "UsersShowController",
			controllerAs: 'show'
		});
});