angular
	.module('NoteWrangler')
	.factory('User', UserFactory);

UserFactory.$inject = ['$resource'];

function UserFactory($resource) {
	return $resource('/users/:id');
}	