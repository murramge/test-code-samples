class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;

//내부적으로 fetch를 하게 된다면 단위테스트 하기 어렵다. 네트워크에 항상 의존하기 때문에.
//별도의 class로 분리해둬야 함!
