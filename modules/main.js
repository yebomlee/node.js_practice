// 모듈 로드(다른 모듈에 존재하는 기능을 사용하기)

// require 함수는 모듈을 로드해서 객체 1개를 리턴.
// require 함수가 리턴하는 함수를 가져다 쓸 수 있도록 변수에 할당.
let addFunc = require('./math_tools.js'); // 상대경로 사용(./ )

console.log(addFunc.add(1, 2));


// 모듈 로드 시 주의 사항.
// 1. 모듈의 확장자인 .js 생략 가능.
let addFunc = require('./math_tools'); // 가능

// 2. 모듈의 경로를 정확히 작성.
// require 함수에 parameter 작성 시, 로드하고 싶은 모듈의 위치를 잘 확인. 정확하게 경로 표시
// math_tools.js가 부모 폴더에 존재 할 경우,
let addFunc = require('../math_tools');

// 3. require 함수가 리턴하는 객체는 상수로 대입.
// 모듈이 리턴한 객체를 변수로 받을 시, 나중에 변수에 다른 값을 실수로 지정 가능함. 예기치 못한 오류 발생 가능.
// 미리 방지 하기 위해 상수로 받는 것을 권장.
const addFunc = require('./math_tools');

// 4. 모듈 안의 모든 것들을 공개 가능.
const allThing = require('./math_tools');

console.log(allThing.add(1, 1));
console.log(allThing.author);
console.log(allThing.test.date);
console.log(allThing.test.level);
allThing.test.printLevel();
