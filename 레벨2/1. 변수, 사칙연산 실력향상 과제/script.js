var age = 20;
// const place = seoul;

// const 이름 = "kim";
// const 이름2 = 'park';

var 이름성;

var 이름성 = "김";
console.log(이름성);

console.log("===========================");

var name = "park";
var id = 0;

function showName() {
  var name = "kim";
  var id = 1;
  console.log(name);
}

showName(); //var를 통해 재선언, 재할당 해버리니 kim 출력
console.log(id); //함수 내 변수가 바깥으로 탈출 못하니, 그냥 함수 위에 있던 var id=0 출력되는 것

console.log("===========================");
/*첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
첫 예금액이 5만원 이상이면 이율이 연 20퍼센트

(1) 변수에 예금액을 넣으면
(2) 2년 후의 / 총 예금액을 자동으로 콘솔창에 출력해주는 기능

(동작예시)

var 예금액이라는 변수에 60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (이자 20%가 2번 붙음)
var 예금액이라는 변수에 10000을 집어넣으면 13225 이게 콘솔창에 출력되어야 합니다. (이자 15%가 2번 붙음)

*/

var 예금액 = 10000;
var 미래예금액 = 0;

미래예금액 = 예금액 * 1.15 * 1.15;
// 미래예금액 = 예금액 * 1.2 * 1.2;

function 미래예금액(예금액) {
  if (예금액 >= 50000) {
    예금액 * 1.2 * 1.2;
  } else {
    예금액 * 1.15 * 1.15;
  }
}
console.log(미래예금액);

console.log("===========================");
// 1. 유저가 답을 맞추면 alert('성공');
// 2. 유저가 답을 3번 찍어서 못맞추면 alert('멍청아') 를 띄워봅시다.
/*
<한글부터 짜기>
제출버튼 누를 때 
유저가 입력한 답안이 '1335'면 alert('성공')
유저가 제출버튼 누른 횟수가 3회 이상이고 답안도 못맞추면 alert('멍청아')
출력하라고 하면 됩니다.
제출버튼 누른 횟수도 var 변수로 어딘가 기록하면 되겠군요. 
*/
var count = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  count += 1;
  var 유저답안 = document.querySelector("#answer").value;

  if (유저답안 == "1335") {
    alert("성공");
  } else if (count >= 3 && 유저답안 != "1335") {
    alert("멍청아");
  }
});

// 아래는 제대로 작동 안됨
// var count = 0;

// document.querySelector("#send-answer").addEventListener("click", function () {
//   count += 1;
//   var 유저답안 = document.querySelector("#answer").value;

//   if (유저답안 == "1335") {
//     alert("성공");
//   } else if (count >= 3 && 유저답안 != "1335") {
//     alert("멍청아");
//   }
// });
