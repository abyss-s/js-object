/*
super() : 부모 클래스의 생성자에 접근
super : 부모 클래스(ex. 함수 등)의 메소드에 접근 

super가 없다면? : 자식이 부모 거 사용 못함

*/

class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return (this.first + this.second);
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third){
        super(name, first, second) // 부모 클래스의 생성자 호출
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
        // 부모 클래스의 함수 sum 호출
    }
    avg(){
        return (this.first + this.second+ this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());