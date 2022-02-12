// 공개하고 싶은 모듈이 여러개 일시, exports를 여러번 작성.
// 모듈 안에 있는 것들을 하나씩 공개.(exports)
exports.add = function add(a, b) {
  return a + b;
};
exports.subtract = function subtract(a, b) {
  return a - b;
};
exports.multiply = function multiply(a, b) {
  return a * b;
};
exports.divide = function divide(a, b) {
  return a / b;
};


// 공개 할 모듈을 하나의 객체로 생성 한 뒤, 객체를 내보낼 수 있음.
// 공개하고 싶은 것들을 모은 객체를 외부에 공개.(module.exports)
let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = calculator;


// 원리
// 1. node.js는 모듈을 로드하기 전에 그 전체 코드를 Module wrapper function이라는 것으로 감싸줌.
(function (exports, require, module, __filename, __dirname) {
  // 모듈 코드
});
// 2. Module wrapper function은 그 5개의 parameter에 각각 적절한 값이나 객체 설정.
// 3. exports의 객체 =  module 객체의 exports property가 가리키는 객체
console.dir(exports);
console.dir(module);
// 4. require 함수는 'module 객체의 exports property가 가리키는 객체'를 리턴하므로
// exports 키워드로는 'exports.속성 = ~'이런 식으로 해당 객체에 property를 추가하는 식으로만 사용 가능.
