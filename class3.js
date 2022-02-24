class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+ (this.first + this.second);
    }
}

// 새로운 클래스 정의: 상속(inheritance)
//                   extends 사용 - 중복 제거

class PersonPlus extends Person {
    /*
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+ (this.first + this.second);
    }
    */
    avg(){
        return (this.first + this.second)/2;
    }
}

var kim = new PersonPlus('kim', 10, 20);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", kim.avg());