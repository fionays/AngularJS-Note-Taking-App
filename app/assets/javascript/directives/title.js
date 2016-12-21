// To override the HTML default title attribute, so just name it "title"
angular
	.module('NoteWrangler')
	.directive('title', title);

function title () {
	// only link is needed
	return function(scope, element, attrs) {
		element.tooltip();

		scope.$on('destroy', function() {
			$(element).tooltip('destroy');
		});
	}
}	
