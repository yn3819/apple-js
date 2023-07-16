/*
one-way 애니메이션 들어있는 UI 만들기

1. 시작화면 만들기 (UI)
2. 버튼 누른 후, 최종화면 만들기 (UI)
    : 슬라이드 컨테이너를 왼쪽으로 움직이면 될 것 같음
3. 원할 때 최종화면으로 변하게 js
4. transition : all 1s

*/

$(".slide-2").on("click", function () {
  // 방법 1 제이쿼리
  $(".slide-container").css("transform", "translateX(-100vw)");

  //방법 2 자바스크립트
  // document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
});

$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0vw)");
});

// next
// 다음버튼 누를 때,
// 1번 보고 있으면 2번 보여줘
// 2번 보고 있으면 3번 보여줘
/*

다음 버튼 누르면
(지금 보이는 사진이 1이면) { 2번 보여줘 }
(지금 보이는 사진이 2이면) { 3번 보여줘 }

// 지금 보는 사진이 1인지 2인지 판단해야함(변수)

$('.next').on('clikc', function(){
    if ( 지금 보이는 사진이 1이면) {
        2번 보여줘 (translateX(-100vw))
    }

})
*/



/*
var 지금사진 = 1;

$(".next").on("click", function () {
  if (지금사진 == 1) {
      $(".slide-container").css("transform", "translateX(-100vw)");
      지금사진 += 1;
  } else if (지금사진 == 2) {
      $(".slide-container").css("transform", "translateX(-200vw)");
      지금사진 ++;
  }
});

// 자바스크립트로
document.querySelector('.prev').addEventListener('click', function(){
    
    if (지금사진 == 3){
        document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
        지금사진 -= 1;

    } else if (지금사진 == 2){
        document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
        지금사진 --;
    }
})

*/



// 숙제: 사진이 갑자기 4개가 되어도 잘되는 확장성 좋은 다음버튼 만들기
// 힌트 1번 사진이면 -100vw, 2번 사진이면 -200vw ... 규칙이 보임

var count = 1
console.log('문자' + count + '문자')
console.log(`문자${count}문자`)


// // 자바스크립트버전
var 지금사진 = 1;
document.querySelector('.next').addEventListener('click', function(){
  // document.querySelector('.slide-container').style.transform = 'translateX(- ' + 지금사진 + ' 00vw)'; // - 1 00    <= 이래서 안된 것
  document.querySelector('.slide-container').style.transform = 'translateX(-' + 지금사진 + '00vw)';
  지금사진 += 1;

})


//제이쿼리 버전
// $('.next').on('click', function(){
//   $('.slide-container').css('transform', 'translateX(-' + 지금사진 + '00vw)');
//   지금사진 += 1;
// })