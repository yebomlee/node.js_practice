// URL(Uniform Resource Locator): 웹 상의 특정 자원(HTML,CSS, JS, 이미지, 영상)의 위치를 나타낸 문자열

// URL의 구조
// http://practice.com/business/store/item?category=2&id=3000
// http - 스킴(scheme): 프로토콜(클라이언트와 서버 간의 통신 규약, 주로 http or https) 이름
// practice.com - 호스트(host): 특정 서버를 나타냄.
// business/store/item - 경로(path): 하나의 서버 안에서 원하는 자원의 위치를 나타냄.
// category=2&id=3000 - 쿼리(query): 서버에 요청할 때 원하는 것을 상세하게 표현하기 위해 사용.

let url = new URL('http://practice.com/business/store/item?category=2&id=3000'); // URL 클래스로 url 객체 생성.

console.log(url.protocol);
console.log(url.host);
console.log(url.pathname);
console.log(url.search);

