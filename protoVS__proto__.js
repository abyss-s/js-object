function Person(name, fisrt, second) {
    this.name = name;
    this.first = fisrt;
    this.second -second;
}

// Person, Person's prototype

Person.prototype.sum = function(){};

var kim = new Person('kim', 10, 20);
// => __proto__, name, first, second
var kim = new Person('kim', 10, 10);
// => __proto__, name, first, second

console.log(kim.name);
console.log(kim.sum()); // kim에 없음 => __proto__ => proto