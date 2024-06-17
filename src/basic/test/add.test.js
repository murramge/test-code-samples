const add = require("../add.js");

test("add", () => {
  // 테스트 코드 작성
  expect(add(1, 2)).toBe(3);
});

//테스트에 관한 타입 정보가 없음 @types/jest 설치.
