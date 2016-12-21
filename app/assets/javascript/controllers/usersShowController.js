angular.module('NoteWrangler').controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['$routeParams', 'User'];

function UsersShowController($routeParams, User) {
	var vm = this;
	vm.user = User.get({id: $routeParams.id});
}