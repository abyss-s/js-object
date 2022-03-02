var superObj = {superVal: 'super'};

// var subObj = {superVal};
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);

// .__proto__와 같이 동작! 프로토타입 링크 지정.
// 괄호 안의 객체를 부모 객체로 취급!

subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);