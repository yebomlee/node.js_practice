// node.js의 핵심 개념 2

// 비동기 프로그래밍이란?
// 특정 작업이 완료되었을 때 실행할 콜백을 등록해두고 바로 다음 코드로 실행을 넘기는 비동기 실행 함수를 사용하는 프로그래밍.

// 동기 실행
const fs = require('fs');

console.log('Start');

let content = fs.readFileSync('../modules/new', 'utf8'); // 'new'라는 파일을 읽어서 리턴.
console.log(content);

console.log('Finish'); // Start, Hello Node.js!, Finish


// 비동기 실행
const fs = require('fs');

console.log('Start');

fs.readFile('../modules/new', 'utf8', (error, data) => {
  console.log(data);
}); // 작업이 완료되었을 때 실행될 callback 함수를 등록

console.log('Finish'); // Start, Finish, Hello Node.js

// node.js는 비동기 실행 함수를 사용하는 것(비동기 프로그래밍)이 권장되는 실행 환경.
// readFile 함수는 세 개의 인자 필요.
// 1) path: 내용을 읽을 파일의 경로, 2) options: 파일의 내용을 읽을 때 적용할 옵션, 3) callback: 파일의 내용을 다 읽었을 때 실행될 콜백.
// path, callback는 필수 인자.
// node.js에서 많은 콜백은 일반적으로 err인자를 첫번째 인자로 설정.(주의!)

// node.js 메인 스레드는 CPU로 하는 수치 계산 작업, 네트워크로 들어오는 클라이언트의 요청을 받아들이고 응답하는 작업을 수행.
// CPU intensive job(고화질 이미지 처리, 복잡한 시뮬레이션 계산, 딥러닝 작업 등)을 주의(성능 저하 원인.)
