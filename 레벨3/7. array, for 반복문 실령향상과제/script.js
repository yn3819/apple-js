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

// 2. 이름찾기연습2 (반복문, 서영연습)
function 이름찾기2() {
  for (let i = 0; i < 출석부.length; i++) {
    if (출석부[i] == "서영") {
      console.log("있어요(2)");
    }
  }
}
이름찾기2();

// 3. 이렇게 해도 됨, name으로(코딩애플)
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
