// 배열

var memberArray = ['young','abyss','moon'];
console.log("memberArray[1]", memberArray[1]); // 인자까지 출력

var memberObject = {
    manager:'young',
    developer: 'abyss',
    designer: 'moon'
}

//객체 읽기 2가지
console.log("memberObject.manager", memberObject.manager);
console.log("memberObject['manager']", memberObject['manager']);

//객체 수정
memberObject.designer = 'epiphany';
console.log(memberObject.designer);

//객체 삭제
delete memberObject.manager
console.log('삭제후 출력', memberObject.manager);