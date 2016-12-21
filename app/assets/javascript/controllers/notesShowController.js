angular.module('NoteWrangler').controller('NotesShowController', NotesShowController);

NotesShowController.$inject = ['$routeParams', '$location', 'Note'];

function NotesShowController($routeParams, $location, Note) {
	var vm = this;

	vm.note = Note.get({id: $routeParams.id});
	vm.deleteNote = function() {
		vm.note.$remove().then(function() {
			$location.path("/notes");
		});
	}
}