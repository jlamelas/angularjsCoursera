(function () {
		'use strict';
		angular
				.module('NarrowItDownApp', [])
				.controller('NarrowItDownController', NarrowItDownController)
				.service('MenuSearchService', MenuSearchService)
				.directive('foundItems', FoundItems);

		function FoundItems () {
				var ddo = {
						templateUrl: "snippets/founditems.html",
						scope: {
								items: '<',
								onRemove: '&',
								message: '@'
						},
						controller: NarrowItDownController,
						controllerAs: 'controller',
						bindToController: true
				};
				return ddo;
		}

		NarrowItDownController.$inject = ['MenuSearchService'];
		function NarrowItDownController (MenuSearchService) {
				var controller = this;
				controller.found = "";
				controller.showFound = function () {
						MenuSearchService.getMatchedMenuItems(controller.searchTerm)
								.then(function (response) {
										controller.found = response;
								});
				};
				controller.removeItem = function (index) {
						controller.found.splice(index, 1);
				};

				controller.nothingFound = function () {
						if (controller.found.length == 0) {
								controller.message = "Nothing found";
						}
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
