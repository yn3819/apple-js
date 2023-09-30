// 생산성있는 방법이 아님. ex) 옷은 95가 아닌, 100부터 시작하는 곳도 있음.
// 1. 자바스크립트로 html 생성법(좀 긺)
const a = document.createElement("p");
a.innerHTML = "안녕1"; // a.classList.add();

document.querySelector("#html-test").appendChild(a);

// 2. 더 간편한 방법
const 템플릿2 = '<p class="hi">안녕22</p>';
document.querySelector("#html-test").insertAdjacentHTML("beforeend", 템플릿2);
// insertAdjacentHTML: 문자형 HTML 넣어주는 함수
// beforeen: 안쪽 맨 밑 추가, 넣을 것 변수이름 넣어주기

// 3. 제이쿼리 버전 더 짧음
// insertAdjacentHTML('beforeend', ) => append
$("#html-test").append(템플릿2);

//4. 밑에 추가하는 게 싫고, 다 갈아치워줘
// document.querySelector('#html-test').innerHTML = '갈아치워줘'
$("#html-test").html(템플릿2); // =위와 동일

/* 성능정리
[생성법 1] 2배 정도 빠름, 실은 별 차이 없음
.createElement()

[생성법2]
.insertAdjacentHTML()
.append()
*/

// 5. 바지 추가했음, 바지 선택하면 28.30 옵션 나오도록
// const size = "<option>28</option>" + "<option>30</option>";
// document
//   .querySelector(".form-select > option")[1]
//   .insertAdjacentHTML("beforeend", size);

$(".form-select").eq(0).on("input", function(){
    const value = this.value;
    const init = $(".form-select").eq(1);

    // 먼저 모든 옵션을 제거합니다.
    init.reset();
    
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    } 
    else if (value == '바지'){
      $(".form-select").eq(1).removeClass("form-hide");
      // $(".form-select").eq(1).html(''); //1. 싹 비워주세요

      const size = `<option>28</option><option>30</option>`
      // $(".form-select").eq(1).append(size) //append: 추가해주세요
      $(".form-select").eq(1).html(size) //2. html: 대체해주세요, 그런데 다시 돌아가면 안바뀜

    }
  });

  // 6. 숙제: 바지눌렀다가 셔츠 누르면 이상한데? 고쳐보기
