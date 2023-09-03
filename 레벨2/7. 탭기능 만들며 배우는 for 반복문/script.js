
/*
0버튼 누르면
-모든 버튼에 붙은 orange 클래스명 제거
-버튼0에 orange 클래스명 추가
-모든 div에 붙은 show 클래스명 제거
-div0에 show 클래스명 추가*/

// $(".tab-button").eq(0).on('click', function(){
//   $(".tab-button").removeClass("orange");
//   $(".tab-button").eq(0).addClass("orange")
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(0).addClass("show")
// })

// $(".tab-button").eq(1).on('click', function(){
//   $(".tab-button").removeClass("orange");
//   $(".tab-button").eq(1).addClass("orange")
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(1).addClass("show")
// })

// $(".tab-button").eq(2).on('click', function(){
//   $(".tab-button").removeClass("orange");
//   $(".tab-button").eq(2).addClass("orange")
//   $(".tab-content").removeClass("show");
//   $(".tab-content").eq(2).addClass("show")
// })

// 셀렉터 > 변수로 만들어쓰기

const 버튼 = $('.tab-button');

버튼.eq(2).on('click', function(){
  버튼.removeClass("orange");
  버튼.eq(2).addClass("orange")
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(2).addClass("show")
});

//한 번에 만들기(1)
// index() 함수는 선택한 요소에 대한 인덱스를 0부터 시작하여 반환
// eq() 함수는 선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다.

// $(".tab-button").on('click', function(){
//   $(".tab-button").removeClass("orange");
//   $(this).addClass("orange")
//   //변수에 탭버튼.index 담기
//   const tabIndex = $(this).index(); //0번째=>0번째 담음
  
  
//   $(".tab-content").removeClass("show");
//   //tab-content의 인덱스 번호에 해당하는 요소 찾음
//   $(".tab-content").eq(tabIndex).addClass("show"); //0번째 보여줌
// })


//반복문
/*
for (횟수){
  console.log('안녕')
}*/

for (let i = 0; i < 3; i++){
  // console.log('i')
  console.log(i)
}

//한 번에 만들기(1)
for(let i = 0; i < 3; i++){
  $(".tab-button").eq(i).on('click', function(){ //0클릭하면
     $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange") //0에 .orange 추가
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show") //0에 .show 추가
     })
}

//버튼과 탭이 5개로 늘어난다면? 확장성 있는 코드로 변경하기
// $(".tab-button").length;
// let tabnum = $(".tab-button").length;
for(let i = 0; i < $(".tab-button").length; i++){
  $(".tab-button").eq(i).on('click', function(){ //0클릭하면
     $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange") //0에 .orange 추가
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show") //0에 .show 추가
     })
}