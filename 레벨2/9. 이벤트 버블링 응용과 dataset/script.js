//한 번에 만들기(1)
// for(let i = 0; i < 3; i++){
//   $(".tab-button").eq(i).on('click', function(){ //0클릭하면
//      $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(i).addClass("orange") //0에 .orange 추가
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(i).addClass("show") //0에 .show 추가
//      })
// }

//버튼과 탭이 5개로 늘어난다면? 확장성 있는 코드로 변경하기
// $(".tab-button").length;
// let tabnum = $(".tab-button").length;

// for(let i = 0; i < $(".tab-button").length; i++){
//   $(".tab-button").eq(i).on('click', function(){ //0클릭하면
//      $(".tab-button").removeClass("orange");
//       $(".tab-button").eq(i).addClass("orange") //0에 .orange 추가
//       $(".tab-content").removeClass("show");
//       $(".tab-content").eq(i).addClass("show") //0에 .show 추가
//      })
// }

// A-1함수로 축약하기

// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i).on("click", function () {
//       탭열기(i)
//     });
// } 

// A-2축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘됨.

function 탭열기(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange"); //0에 .orange 추가
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}

// B-1 탭기능 다르게 만들기 => 이벤트리스너 1개만 쓰기(렘 여유 생김)
// 이벤트버블링 알고 있으면 이벤트 리스너 많이 필요 없음

$(".list").click(function(e){
  // 지금 누른 게 버튼 90이면 버튼 0에 orange컬러 넣고, 박스0에 show 부착해
  // = 지금 누른 게 버튼 0이면 탭열기(0)
  // = 지금 누른 게 버튼 1이면 탭열기(1)
  // = 지금 누른 게 버튼 2이면 탭열기(2)

  // if(e.target == document.querySelectorAll('.tab-button')[0]){ }
    // C-2 탭열기(지금 누른 버튼에 숨겨져있는 data-id 출력), 그럼  if문 필요 없을 듯
    console.log(e.target.dataset.id)
    탭열기(e.target.dataset.id)

})
//data-id는 테크닉일뿐, 반복문 써도 됨

//오늘 요약
// 1. 함수로 축약할 때 변수 있으면 파라미터로 바꿔봐라
// 2. data-id로 몰래 숨기기 가능
// 3. 이벤트리스너 1개만 써도 개발가능할수도