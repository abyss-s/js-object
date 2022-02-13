/*

var kim = {
    name: 'kim',
    fisrt: 10,
    second: 20,
    third: 30,
    sum: function() {
        return this.fisrt + this.second + this.third;
    }
}

var lee = {
    name: 'kim',
    fisrt: 10,
    second: 10,
    third: 10,
    sum: function() {
        return this.fisrt + this.second + this.third;
    }
}

console.log(kim.sum());
console.log(lee.sum());

*/
var d1 = new Date('2022-2-13'); // 날짜 객체 d1 (생성자)

console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

function Person(name, first, second, third) {
    this.name = name;
    this.fisrt = first;
    this.second = second,
    this.third = third,
    this.sum = function() {
        return this.fisrt + this.second + this.third;
    }
}

// 생성자 함수: 객체를 찍어내는 공장.
//             인자를 바꾸면 객체를 계속 찍어 낼 수 있다.
//             중복 제거, 수정 용이

console.log(new Person()); 

var kim = new Person('kim', 10, 20 ,30);
var lee = new Person('lee', 10, 10, 10);

console.log(kim.sum());
console.log(lee.sum());