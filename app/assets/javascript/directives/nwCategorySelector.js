angular
	.module('NoteWrangler')
	.directive('nwCategorySelector', nwCategorySelector);

nwCategorySelector.$inject = ['Category'];	

function nwCategorySelector(Category) {
	var directive = {
		replace: true,
		require: '?ngModel',
		restrict: 'E',
		templateUrl: "assets/templates/directives/nwCategorySelector.html",
		link: link
	};

	function link(scope, element, attr, ngModelCtrl) {
		var activeCategory = {};

		scope.categories = Category.query();

		scope.isActive = function(category) {
			return activeCategory && category.id === activeCategory.id;
		}

		scope.toggleCategory = function(category) {
			if (category === activeCategory) {
				// untaggle
				activeCategory = {};
			} else {
				// taggle
				activeCategory = category;
			}

			ngModelCtrl.$setViewValue(activeCategory);
		}

		ngModelCtrl.$render = function() {
			activeCategory = ngModelCtrl.$viewValue;
		}
	}

	return directive;
}