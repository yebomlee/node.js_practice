// 서드파티 모듈?
// 여러 개발자, 회사들이 제작하여 인터넷상의 공개 저장소에서 제공 하는 모듈. 제 3자가 만든 모듈.

// npm install cowsay(cowsay라는 서드파티 모듈을 설치)
const cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: 'I love javascript!',
  })
); // 귀엽군.


// 1. package-lock.json 파일
// 현재 작업 디렉토리 안에 설치된 모든 서드파티 모듈들에 관한 정보가 기록.
// 하나의 서드파티 모듈이 설치될 때는 그것이 의존하는 다른 서드파티 모듈들도 함께 설치됨.(requires 필드 살펴보기!)
// dependencies: 현재 작업 디렉토리 안에 설치된 서드파티 모듈들의 정보가 담겨있음.

// 2. node_modules 디렉토리
// 서드파티 모듈들이 실제로 설치되어 있는 디렉토리(설치되는 공간)
// ls -al로 조회 시, 서브파티 모듈들은 각각 하나의 디렉토리로 존재.
