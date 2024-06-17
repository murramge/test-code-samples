const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({
        item: "Milk",
        price: 200,
      });
      done();
    });
  });
  //좋지 않음..

  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({
        item: "Milk",
        price: 200,
      });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toMatch("network error");
  });
});

// test("reject error", async () => {
//   await expect(fetchProduct("error")).rejects.toMatch("network error");
// });

// test("resolve toBe", async () => {
//   await expect(fetchProduct("success")).resolves.toEqual({
//     item: "Milk",
//     price: 200,
//   });
// });
