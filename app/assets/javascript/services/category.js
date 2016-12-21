angular
	.module('NoteWrangler')
	.factory('Category', CategoryFactory);

CategoryFactory.$inject = ['$resource'];

function CategoryFactory($resource) {
	return $resource('/categories/:id');
}	