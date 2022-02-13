// Express(서드 파티 모듈)로 routing
const express = require('express');
const app = express(); // express 모듈로 app(일반적 이름) 객체 생성.

const users = ['Judy', 'Nick', 'Anna', 'Elsa'];

// 라우팅을 하는 코드의 순서 중요.
app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
  response.end('<h1>Sorry. NOT Available</h1>');
});

app.listen(3000);