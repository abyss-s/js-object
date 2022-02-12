var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second; 
    }
}
// this: 메소드 내 객체 지칭!
// 객체 이름이 바뀌어도 유연하게 대처 가능

console.log("kim.sum(kim.first, kim.second)", kim.sum());

// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
