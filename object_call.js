
/*
call: 함수를 호출할때마다 this의 값을 내가 원하는 객체로 지정해서 실행시켜줌.
모든 함수가 가지고 있는 내장 함수.
*/


var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(prefix){
    // this => 객체
    return prefix+(this.first+this.second);
}

// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));