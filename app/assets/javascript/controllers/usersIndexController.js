angular.module('NoteWrangler').controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$routeParams', 'User'];

function UsersIndexController($routeParams, User) {
	var vm = this;
	vm.users = User.query();
}