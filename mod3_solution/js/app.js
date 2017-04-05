(function (){
    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

<<<<<<< HEAD
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
=======
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var ctrl = this;
        ctrl.message = 'Nothing found';
        ctrl.showFound = function (searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm)
                .then(function (foundItems) {
                    ctrl.found = foundItems;
                });
        };
        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService ($http) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            });
            return response
                .then(function (response) {
                    var items = response.data.menu_items;
                    var foundItems = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].description.includes(searchTerm)) {
                            foundItems.push(items[i]);
                        }
                    }
                    return foundItems;
                });
        };
    }
>>>>>>> 87a749e8edf8f42f129afb6cadc9c9e6e699de46

    function FoundItemsDirective () {
        return {
            templateUrl: 'snippets/founditems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };
    }
})();
