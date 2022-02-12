// node.js의 이벤트
// 어떤 일이 발생했음을 알리는 신호

const EventEmitter = require('events'); // class 하나를 외부에 공개.

const myEmitter = new EventEmitter(); // class를 사용하려면 객체 생성.

myEmitter.on('test', () => {
  console.log('Success!');
}); // on method: 어떤 이벤트가 발생했을 때, 실행할 콜백을 등록하는 함수.

myEmitter.emit('test'); // emit method: 이벤트를 발생시키는 함수.


// 코어 모듈의 많은 객체들이 EventEmitter의 객체이다!(이를 사용함으로써 이벤트 기반 프로그래밍 가능.)
/*
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture 
in which certain kinds of objects (called "emitters") emit named events 
that cause Function objects ("listeners") to be called.
*/
