// 서버 만들기
const http = require('http'); // http 라는 코어 모듈을 로드했을 때, 리턴되는 객체를 http 라는 상수로 설정.

let server = http.createServer(function(request, response) {
    response.end('<h1>hello world!</h1>') // end method 사용하여 데이터가 모두 로드됐음을 알림.
}); // createServer method는 서버 역할을 하는 객체 하나를 생성해 줌. // 서버 객체에 클라이언트의 요청이 들어올 때 마다 실행되는 함수 설정.

server.listen(3000); // 서버 객체가 외부(클라이언트)의 요청을 받을 수 있게 설정. (포트번호 설정)


// 요청 보내기
// 127.0.0.1:3000 
// ip주소:포트 번호
// 자신의 컴퓨터를 나타내는 고유한 주소:포트 번호(서버에서 실행되고 있는 여러 프로그램 중 어느 프로그램과 통신할 것인지를 나타내기 위해 지정하는 번호).
// 포트 번호 없는 URL로 접속하는 경우가 많으므로, common port number을 따른다.(서비스 배포시 80, 443 사용)

// 내 컴퓨터에서 3000번 포트 번호를 가지고 실행되고 있던 서버 프로그램과 http라는 프로토콜로 통신을 시작~!