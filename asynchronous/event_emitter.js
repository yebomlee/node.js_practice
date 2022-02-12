// 하나의 이벤트에 관해서 여러개의 콜백을 설정할 수 있음.
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
  console.log('1');
});

myEmitter.on('test', () => {
  console.log('2');
});

myEmitter.on('test', () => {
  console.log('3');
});

myEmitter.emit('test'); // 1, 2, 3


// 이벤트 설정과 콜백 실행은 하나의 EventEmitter 객체 안에서만 실행.
// 이벤트 이름이 같더라도 객체에 이미 설정된 콜백이 다른 객체의 이벤트에 반응 X.
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const myEmitter2 = new EventEmitter();

myEmitter.on('test', () => {
  console.log('1');
});

myEmitter.on('test', () => {
  console.log('2');
});

myEmitter2.on('test', () => {
  console.log('3');
});

myEmitter.emit('test'); // 1, 2
