class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }
  //외부에서 받아와야 한다! 의존성 역전시킴

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
