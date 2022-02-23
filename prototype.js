function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;  
}

// prototype 함수: 객체들이 공통으로 사용 -> 메모리 절약 필요
//                 외부로 빼서 따로 만듦 -> 생성자.프로토타입
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}

var kim = new Person('kim', 10, 20);

// 이 객체의 sum 속성만 바꾸고 싶다면?
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}


var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());