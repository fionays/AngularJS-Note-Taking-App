angular.module('NoteWrangler').controller('NotesIndexController', NotesIndexController);

NotesIndexController.$inject = ['Note'];

function NotesIndexController(Note) {
	var vm = this;
	vm.notes = Note.query();
	vm.search = {};
	window.s = this;
}