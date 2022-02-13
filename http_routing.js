// 라우팅: 요청이 들어온 url에 따라 서버가 다르게 응답 처리 하는 것, 알맞은 처리로 분기.
const http = require('http');

users = ['Judy', 'Nick', 'Anna', 'Elsa'];

// http 모듈로 라우팅.
let server = http.createServer(function (request, response) { // Arrow Function, const 수정
  if (request.url === '/') {
    // path 부분 입력 하지 않아도 브라우저는 요청 시, 자동으로 '/' 설정.
    response.end('<h1>Welcome!</h1>');
  } else if (request.url === '/users') {
    response.end('<h1>' + users + '</h1>'); // 템플릿 문자열 사용
  } else if (request.url.split('/')[1] === 'users') {
    let userIdx = request.url.split('/')[2]; // const 수정
    let userName = users[userIdx - 1]; // const 수정

    response.end('<h1>' + userName + '</h1>');
  } else {
    response.end('<h1>Sorry. NOT Available</h1>');
  }
});

server.listen(3000);
