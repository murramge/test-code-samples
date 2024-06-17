const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

//mock을 남용하는 사례
jest.mock("../product_client");
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => {
    return [
      { item: "Milk", available: true },
      { item: "banana", available: false },
    ];
  });
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});

//환경적인 요인에 영향을 받지 않고 원하는 것만 날카롭게 검증할 수 있음!!
//의존성이 있다면, Mock을 이용해서 의존하지 않도록 만들 수 있음.
