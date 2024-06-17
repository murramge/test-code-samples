const ProductClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
    //외부에서 받아와야 함!!
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
