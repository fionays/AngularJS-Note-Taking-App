angular
	.module('NoteWrangler')
	.directive('nwPageNav', nwPageNav);

function nwPageNav() {
	var directive = {
		replace: true,
		restrict: 'E',
		templateUrl: "assets/templates/directives/nwPageNav.html",
		controller: PageNavController,
		controllerAs: 'pageNav'
	};
	return directive;
}	

PageNavController.$inject = ['$location'];

function PageNavController($location) {
 	var vm = this;

 	vm.isPage = function(name) {
 		return new RegExp("/" + name + "($|/)").test($location.path());
 	};
}
