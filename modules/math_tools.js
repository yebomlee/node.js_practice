// node.js의 핵심 개념 1

// 모듈(module)이란? 전체를 이루는 부품 하나하나를 의미.
// 하나의 모듈에서 다른 모듈의 기능을 가져다 사용.

// 사용 방법.(모듈 생성)
function add(a, b) {
  return a + b;
}

const PI = 3.14;
let author = 'cocoa';

let test = {
  date: '2022-02-12',
  level: ['A', 'B'],
  printLevel() {
    for (const i in this.level) {
      console.log(this.level[i]);
    }
  },
};

// 모듈 내부의 것들을 외부로 공개.(내보내기)
// exports.add(모듈 외부로 공개할 이름) = add(모듈 내부에서의 이름)
// 함수 이름을 변경해서 내보내기 가능.
exports.add = add;
exports.author = author;
exports.PI = PI;
exports.test = test;
