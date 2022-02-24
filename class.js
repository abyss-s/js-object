//class 생성

/*
class Person {

}

var kim = new Person();
console.log(kim);
*/

// class constructor function

class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

var kim = new Person('kim', 10, 20);
console.log('kim', kim);

// 출력값: kim Person { name: 'kim', first: 10, second: 20 }