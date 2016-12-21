angular.module('ngGravatar', []);

// Directive
angular.module('ngGravatar').directive("gravatar", function(Gravatar) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			email: "="
		},
		template: "<img ng-src='{{gravatarUrl()}}'>",
		link: function(scope) {
			scope.gravatarUrl = function() {
				return Gravatar(scope.email);
			}
		}
	};
});

// Service, need to be configurable, so it is a provider
angular.module('ngGravatar').provider('Gravatar', function() {
	var imgSize = 50;
	var url = "http://www.gravatar.com/avatar/";

	this.setSize = function(value) {
		imgSize = value;
	} 

	this.$get = function() {
		return function(email) {
			return url + CryptoJS.MD5(email) + "?size=" + imgSize.toString();
		}
	}
});