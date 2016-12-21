angular
	.module('NoteWrangler')
	.factory('Note', NoteFactory);

NoteFactory.$inject = ['$resource'];

function NoteFactory($resource) {
	return $resource('notes/:id', 
		{
			id: "@id"
		},
		{
			update: {method: 'PUT'},
		}
	);
}	