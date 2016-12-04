(function () {
		'use strict';
		angular
				.module('NarrowItDownApp', [])
				.controller('NarrowItDownController', NarrowItDownController)
				.service('MenuSearchService', MenuSearchService)
				.directive('foundItems', FoundItems);

		function FoundItems () {
				var ddo = {
						templateUrl: "snippets/founditems.html"
						// scope: {
						// 		foundedItems: '<'
						// },
						// controller: FoundItemsDirectiveController,
						// controllerAs: 'list',
						// bindToController: true
				};
				return ddo;
		}

		NarrowItDownController.$inject = ['MenuSearchService'];
		function NarrowItDownController (MenuSearchService) {
				var controller = this;
			
				controller.showFound = function (searchTerm) {
						MenuSearchService.getMatchedMenuItems(searchTerm)
								.then(function (response) {
										controller.found = response;
								});
				};
		}

		MenuSearchService.$inject = ['$http'];
		function MenuSearchService ($http) {
				var service = this;
				
				service.getMatchedMenuItems = function (searchTerm) {
						var response = $http({
								method: "GET",
								url: "https://davids-restaurant.herokuapp.com/menu_items.json"
						});
						return response
								.then(function (response) {
										var items = response.data.menu_items;
										var foundItems = [];
										for (var i = 0; i < items.length; i++) {
												if (items[i].description.includes(searchTerm)) {
														foundItems.push(items[i]);
												} else {
														console.log("Nothing found");
												}
										}
										return foundItems;
								});
				};
		}
		
})();
