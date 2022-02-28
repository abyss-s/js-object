var superObj = {superVal: 'super'};
var subObj = {subVal: 'sub'};

subObj.__proto__ = superObj;

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

//.__proto__ : subObj의 부모를 superObj로!
//             찾았는데 없다면, 부모에서 가져다 씀.

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

// 자식 객체값을 바꿔도, 프로토 값은 바뀌지 않음. (얕은 복사같은 느낌!)