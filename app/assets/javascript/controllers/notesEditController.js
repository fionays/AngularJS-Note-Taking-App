angular.module('NoteWrangler').controller('NotesEditController', NotesEditController);

NotesEditController.$inject = ['$routeParams', '$location', 'Note', 'User', 'Category'];

function NotesEditController($routeParams, $location, Note, User, Category) {
	var vm = this;

	vm.isSubmitting = false;
	vm.note = Note.get({id: $routeParams.id});
	vm.categories = Category.query();
	vm.users = User.query();

	vm.saveNote = function(note) {
		vm.isSubmitting = true;
		note.$update().finally(function() {
			vm.isSubmitting = false;
			$location.path("/notes/" + note.id);
		});
	}
}

