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

// 디폴트, 시작=====================================================
/*
1. 내가 드래그한 거리만큼 박스도 왼쪽으로 움직임
2. 
 */
/*알아야 할 이벤트
mousedown : 마우스 찍었을 떄
mouseup : 마우스 뗄 때
mousemove : 마우스 움직일 때

click: 마우스 다운, 마우스 업 합쳐준 통합이벤트 같은 것임.
*/

// 모든 변수는 범위가 function임!! 모든 변수는 다른 함수에서 못씀. 펑션 안에 있던 변수는 함수 탈출 못함
// 따라서 변수를 바깥에 두는 것도 좋은 방법
// 1. 내가 드래그한 거리만큼 박스도 왼쪽으로 움직임
// console.log(e.clientX); // 마우스 좌표 알려줌 e.clientY
// html에 draggable="false 이미지태그에 넣으면 드래그 앤 이동 안됨

// 1-1.
let 시작좌표 = 0;
let 눌렀냐 = false;
let 뗐냐 = false;

// 1-2.
$('.slide-box').eq(0).on('mousedown', function(e){
 시작좌표 =  e.clientX;
 눌렀냐 = true;
})

$('.slide-box').eq(0).on('mouseup', function(e){
  시작좌표 =  e.clientX;
  뗐냐 = true;
 })

// 1-3.
$('.slide-box').eq(0).on('mousemove', function(e){
  시작좌표 -  e.clientX;
  // console.log(시작좌표 -  e.clientX);
  console.log(e.clientX - 시작좌표); //함수처럼 왼쪽으로 나오도록

  // 1-5. 마우스찍은 후에 박스 움직이게 해주세요.
  if(눌렀냐 == true){
    // 1-4. 좀 이상하게 될것(미완)
    $(".slide-container").css('transform',`translateX(${e.clientX - 시작좌표}px)`);
  } else if(뗐냐 == true && e.clientX > 100){
    console.log("다음사진")
    $(".slide-container").css('transform',`translateX(${e.clientX - 시작좌표}px)`);
    // document.querySelector('.slide-container').style.transform = 'translateX(-' + 지금사진 + '00vw)';
  } else{
    return
  }
});

$('.slide-box').eq(0).on('mouseup', function(e){
  눌렀냐 = false;
 })
 
//  기능2: 손놓을 때 100px이상 이동했으면 둘째사진보임, or첫째사진보임(서서히, 트랜지션)