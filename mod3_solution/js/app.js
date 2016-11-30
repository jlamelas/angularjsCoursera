(function () {
		angular
				.module('NarrowItDownApp', [])
				.controller('NarrowItDownController', NarrowItDownController)
				.service('MenuSearchService', MenuSearchService);
		
		NarrowItDownController.$inject = ['MenuSearchService'];
		function NarrowItDownController (MenuSearchService) {
				var controller = this;
		}

		MenuSearchService.$inject = ['$http'];
		function MenuSearchService ($http) {
				var service = this;
				service.getMatchedMenuItems = function (searchTerm) {
						
				};
		}
		
})();
