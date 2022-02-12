// 배열 반복
var memberArray = ['young', 'abyss', 'moon'];
console.group('array loop');
var i = 0; 
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager:'young',
    developer:'abyss', 
    designer:'moon'
}

// 객체 반복
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]); //변수X, 속성에 맞춰야 함
}
console.groupEnd('object loop');