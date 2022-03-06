// bind: 함수의 this 즉 객체가 고정된 새로운 함수를 만들어 낸다.

var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(prefix){
    return prefix+(this.first+this.second);
}

// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));

var kimSum = sum.bind(kim, '-> '); 
// 새로운 함수 생성(sum()에는 영향 X). this값을 ()안의 객체로 고정시킨 채!
console.log('kimSum()', kimSum());
