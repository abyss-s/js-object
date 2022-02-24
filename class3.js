class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+(this.first+this.second);
        }    
}


Person.prototype.sum = function(){
    return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);


kim.sum = function(){
    return 'this : ' + (this.first + this.second);
}


console.log('kim : ', kim);
console.log('kim.sum() ', kim.sum());
console.log('lee.sum() ', lee.sum());