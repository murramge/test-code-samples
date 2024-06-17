class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}

module.exports = StubProductClient;

//재사용이 가능한, Stub_client 만들기
//test용으로만 사용할거기 때문에 test 폴더 안에 들어있어야 함
