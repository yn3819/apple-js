var 출석부 = ["흥민", "영희", "철수", "재석", "서영"];
var 출석부 = ["흥민", "영희", "철수", "철수", "서영"];

// 1. (혼자) 이름찾기 연습1
function 이름찾기1() {
  console.log(출석부);
  // let value = this.value;
  // console.log(value);

  if (출석부[0] == "철수") {
    console.log("있어요0");
  } else if (출석부[1] == "철수") {
    console.log("있어요1");
  } else if (출석부[2] == "철수") {
    console.log("있어요2");
  } else if (출석부[3] == "철수") {
    console.log("있어요3");
  } else {
    console.log("없어요");
  }
}

이름찾기1();

// 1-2. 이름찾기연습2 (반복문, 서영연습)
function 이름찾기2() {
  for (let i = 0; i < 출석부.length; i++) {
    if (출석부[i] == "서영") {
      console.log("있어요(2)");
    }
  }
}
이름찾기2();

// 1-3. 이렇게 해도 됨, name으로(코딩애플)
function 이름찾기(name) {
  for (var i = 0; i < 4; i++) {
    if (name == 출석부[i]) {
      console.log("있어요");
      return;
      //출석부 array 안에 '철수'가 2번이나 들어있으면 '있어요'가 2번이나 출력되는군요. return
    }
  }
}

이름찾기("철수");

// 물론 indexOf, find 이런 자바스크립트 기본함수 찾아서 쓰면 array에서 문자검색을 쉽게 할 수 있습니다.
// 그 기능을 직접 기본 문법만으로 짜는 것도 좋은 연습입니다.

// 2. 구구단 콘솔에 출력하기(2단,3단,4단)
for (let i = 1; i < 10; i++) {
  if (i < 10) {
    console.log(2 * i);
  }
}
// if 없어도 됨
for (let i = 1; i < 10; i++) {
  console.log(2 * i);
}
for (let i = 1; i < 10; i++) {
  console.log(3 * i);
}
for (let i = 1; i < 10; i++) {
  console.log(4 * i);
}

// 1-9단까지 이중 for문
for (let k = 1; k < 10; k++) {
  console.log(k + "단");
  for (let i = 1; i < 10; i++) {
    console.log(k * i);
  }
}

// 3. 평균점수 계산기 만들기
score = [10, 20, 30, 40, 50];

/*
function 함수(score, b){
  score 안에 있는 숫자들 평균 내기
  그걸 b랑 비교해서 b가 더 크면 console.log('올랐네요')
  b가 더 작으면 console.log('재수추천')
}
*/

// 3-2. 평균값 구하기(다 더하고, 나누기 5)
function 함수() {
  let result = 0;
  result = result + score[0]; //10
  result = result + score[1]; //30
  result = result + score[2]; //60
  result = result + score[3]; //100
  result = result + score[4]; //150
  console.log(result+"(1)");
}
함수();

// 3-2. 더 효율적으로 평균값 구하기

function 함수2(score, b) {
  let result = 0; //result 정의 먼저 한 후 for문 돌리기
  let val = 0

  for (let i = 0; i < score.length; i++) {
    result = result + score[i];
    val = b-result;
  }
  
  console.log(result + "(2)");

  if(result / score.length < b){
    console.log("평균보다"+val+"점이나 올랐네요")
    console.log(val+"점");
  } else{
    console.log("평균보다 같거나 떨어졌네요")
  }
}
// 함수2(); //함수(score, b) 필요한 인자를 전달해주어야 오류가 안뜸
함수2([10,10,10],40); //평균 10, 점수 40
함수2([20,20,20],20); //평균 20
함수2([20,20,20],10); //평균 20
