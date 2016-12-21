angular.module('NoteWrangler').controller('NotesCreateController', NotesCreateController);

NotesCreateController.$inject = ['$location', 'Note'];

function NotesCreateController($location, Note) {
	var vm = this;

	vm.note = new Note();
	vm.isSubmitting = false;

	vm.saveNote = function(note) {
		vm.isSubmitting = true;
		note.$save().then(function() {
			$location.path("/notes");
		}).finally(function() {
			vm.isSubmitting = false;
		});
	}
}
