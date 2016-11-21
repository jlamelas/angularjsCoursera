(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buy = this;

    buy.items = ShoppingListCheckOffService.getItemsToBuy();
    buy.buyProcess = function (itemIndex) {
      ShoppingListCheckOffService.buyProcess(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getItemsBought();
    console.log(bought.items);
  }

  function ShoppingListCheckOffService () {
    var service = this;

    // Items arrays

    var itemsToBuy = [
      {name: "Cookies", quantity: 2},
      {name: "Bread", quantity: 1},
      {name: "Oranges", quantity: 2},
      {name: "Apples", quantity: 4},
      {name: "Mineral water", quantity: 4},
      {name: "Corn flakes", quantity: 2},
      {name: "Milk", quantity: 3}
    ];
    var itemsBought = [];

    // Push buy buttom functionality

    service.buyProcess = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
      console.log(itemIndex);
    };

    // getItems

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };
    service.getItemsBought = function () {
      return itemsBought;
    };
  }
})();