/*function 문법
1. 긴 코드 축약해서 쓸 수 있음
2. 파라미터 추가기능
3. return
*/

function 더하기(b){
  console.log(1+b)
}
더하기(3)

// var 결과값 = 더하기();
// console.log(결과값)

console.log('=================')


// return 
function 함수(a){
  return 1+3 
  console.log(1)
  }

함수() //여기에 123이 남는 것

var 변수 = 함수();
console.log(변수)

/* return
1. 함수 쓰고 그 자리에 뭔가 뱉고 싶으면 reture
2. 함수 종료 기능(함수 내에서 쓰면, 밑에 있는 코드 실행 안됨)

* return 의 용도
자료를 넣으면 다른 자료가 나오는 변환기 만들고 싶을 때(함수랑 비슷)

*/

console.log('=================')

// 많은 부가세 계산이 필요할 경우?
// console.log(60000 * 0.1)
// console.log(60000 * 0.1)
// console.log(60000 * 0.1)
console.log(vat(50000))

function vat(a){
  return a * 0.1
}

// 문자 => 문자 변환기
// 숫자 => true / false 변환기

// 소수점 반올림하는 법 : 숫자.toFixed(몇자리)

console.log(vat(55555))
function vat(a){
  var num = (a * 1.1)
  return num
}


console.log(vat2(55555))
function vat2(b){
  var num = (b * 1.1).toFixed(1);
  return parseFloat(num)
}

// toFixed 쓰면 문자로 변환됨. 따라서 
// 65줄에 return num  =>  return parseFloat(num)