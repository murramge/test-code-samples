const Calculator = require("../calculator.js");

const calculator = new Calculator();

function compileError() {
  throw new Error("Value can not be greater than 100");
}

//관련있는 테스트를 그룹으로 묶을 수 있음!
//beforeEach <- 하나하나씩 테스트 하기 전에 먼저 수행되어야 할 함수들을 지정해 줌!
//afterEach <- 하나하나 테스트 한 후에 수행되어야 할 함수
//여기서는, class를 선언하는 것을 먼저 수행해주어야 함. 중요한 점은 각각의 테스트들은 독립적으로 수행되어야 한다는 것.

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiply", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 /4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});

test("", () => {
  calculator;
});

test("clear", () => {
  calculator.clear();
});

test("set", () => {
  calculator.set(10);
  expect(calculator.value).toBe(10);
});

test("add", () => {
  calculator.add(10);
  if (expect(calculator.value).toBeLessThan(100)) {
    expect(() => compileError()).toThrow();
  }

  expect(calculator.value).toBe(20);
});

test("subtract", () => {
  calculator.subtract(10);
  expect(calculator.value).toBe(10);
});

test("multiply", () => {
  calculator.multiply(10);
  expect(calculator.value).toBe(100);
});

test("divide", () => {
  calculator.divide(10);
  expect(calculator.value).toBe(10);
});
