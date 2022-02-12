// 모듈: 내가 직접 만든 모듈, 이미 만들어져 있는 모듈
// 이미 만들어져 있는 모듈: 코어 모듈, 서드파티 모듈

// 코어 모듈?
// node 안에 미리 포함되어 있는 모듈.
const fs = require('fs'); // 파일 시스템 모듈, 파일이나 디렉토리에 관한 작업시 사용(디렉토리 생성, 파일 삭제 등)

let fileList = fs.readdirSync('.'); // 특정 디렉토리 안에 있는 파일 목록들을 배열 형식으로 리턴하는 함수.
console.log(fileList);

// 파일 생성
fs.writeFileSync('new', 'Hello Node.js!');


const os = require('os'); // 운영 체제 모듈, 컴퓨터에 설치된 운영 체제에 관한 정보들을 가져올 수 있음.

console.log(os.cpus()); // 현재 컴퓨터의 cpu 정보를 리턴하는 함수.

// Node.js api 공식 문서: https://nodejs.org/dist/latest-v12.x/docs/api/
// 이러한 관련 함수는 보안상 브라우저에서는 작업 불가능.