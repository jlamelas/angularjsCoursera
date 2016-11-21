(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buy = this;

    buy.items = ShoppingListCheckOffService.getItemsToBuy();
        
    buy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
    buy.addItem = function (name, quantity) {
      ShoppingListCheckOffService.addItem(name, quantity);
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

    service.removeItem = function (itemIndex) {
      function removeItem (itemIndex) {
        itemsToBuy.splice(itemIndex, 1);
      };

      removeItem(itemIndex);
    };
    service.addItem = function (name, quantity) {
      var item = {name: name, quantity: quantity};

      function addItem (item) {
        itemsBought.push(item);
      };
      
      addItem(item);
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