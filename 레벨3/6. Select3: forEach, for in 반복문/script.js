// 6. 숙제: 바지눌렀다가 셔츠 누르면 이상한데? 고쳐보기
// 실제로 서버에서 데이터 가져와서 하는 법, 가져올 수 없으니 변수로 대체해서 해보기

const pants = [28, 32, 38, 40, 42];
const shirts = [100, 105, 110];

$(".form-select")
  .eq(0)
  .on("input", function () {
    const value = this.value;

    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    } else if (value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      // 1. for 반복문
      // for (let i = 0; i < pants.length; i ++){
      //option 태그 생성해주세요(=팬츠개수만큼)
      // }
      //2. array에 붙일 수 있는 forEach 반복문 ex)배열이 몇개있냐따라 그 개수만큼 반복해줌
      // 3. foreach의 콜백함수에 파라미터 넣어주기. (a) 이 데이터는 팬츠의 하나하나의 데이터가 됨.
      pants.forEach(function (a) {
        // console.log(123); // 5번 반복해서나옴
        console.log(a); //

        // $(".form-select").eq(1).append('<option>28</option>') //28 출력
        // $(".form-select").eq(1).append('<option>a</option>') // 배열이 출력됨
        // $(".form-select").eq(1).append(`<option>${a}</option>`) // 배열이 출력됨(문자 중간에 변수 넣고싶으면 백팁)

        // 4. foreach 안에 파라미터 2개 생성 가능
        // i = 반복문 돌때마다 0부터 1씩 증가하는 정수임
        // 첫째는 array 안의 데이터
        // 둘째는 0부터 1씩 증가하는 정수
        // a = 팬츠 안에 있던 하나하나의 데이터
        // pants.forEach(function(a, i){ //item, data로 이름 붙이기도 함
        //   $(".form-select").eq(1).append(`<option>${i}</option>`)
        // })

        // 5. function 문법 다르게 표현 가능
        // arrow function 차이점 있음
        // 펑션 안에 this값이 달라질 수 있음.
        // -애로우 function: 바깥에 있는 걸 가져옴. ex) e.currentTarget할때 다른 것들이 나올 것임
        // -일반 function: 펑션 안에서 this쓰면, this가 알맞게 재정의됨
        pants.forEach((a) => {
          $(".form-select").eq(1).append(`<option>${i}</option>`);
        });
      });
    }
  });

// 숙제: 셔츠 선택 시 어레이 개수에 맞게 option 생성

// for in 반복문
// 6. object 자료 개수만큼 반복문 돌리기
const obj = { name: "kim", age: 20, school: "middle" };

for (var key in obj) {
  // console.log(1); //1이 3번 출력됨
  // console.log(key); //name, age, school
  console.log(obj); //name: 'kim', age: 20, school: 'middle'
  // console.log(obj[key]); //'kim', 20, 'middle' (키의 값)
  // console.log([key]); //name, age (키)
  // console.log(obj.name); // 'kim' 3번 반복함
  // kim만 빼려면? 안되나
}

/* 반복문의 용도
  1. 코드 반복
  2. array, object 데이터 전부 꺼낼 때 */
