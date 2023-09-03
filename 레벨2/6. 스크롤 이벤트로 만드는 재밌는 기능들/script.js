//window
//1. scroll 이벤트 리스너
// 윈도우 앞에 자꾸 this 붙음..
window.addEventListener("scroll", function () {
  // console.log(1);
  // scrollY: div박스 내에서는 안 되고 window 전체만 됨.
  // 유저가 얼마나 스크롤바 내렸나 ( = window.pageYOffset)
  // console.log(window.scrollY);


  // 강제로 스크롤하기 window.scroll(x,y),순간이동됨(부트스트랩때문에 스무스하게 되는 것임)
  // window.scrollTo(0,100);
  // 현재 위치에서 강제로 스크롤하기: 현재 위치에서 100만큼 밑으로
  // window.scrollBy(0,100);
});

// 2. 제이쿼리 버전
$(window).on("scroll", function () {
  // 현재 스크롤바 위치 출력
  console.log($(window).scrollTop());

  // 현재 스크롤바 이동
  //  $(window).scrollTop(100)
});



console.log("=================================")

// =================================================
// 숙제1: 스크롤바 100px 이상 내리면 로고 폰트사이즈 줄이기

window.addEventListener("scroll", function(){
  console.log(window.scrollY);

  if(window.scrollY > 200){
    this.document.querySelector(".navbar-brand").style.fontSize = "20px";
  } else {
    
    // 원래대로 30px넣어도 되고 null 넣어도됨, "" 공백도됨. 초기값
    // this.document.querySelector(".navbar-brand").style.fontSize = null;
    this.document.querySelector(".navbar-brand").style.fontSize = "";
  }
})


// 숙제2: 박스의 스크롤바 끝까지 내리면 alert()띄우기. 10px 정도 띄워서
// div 스크롤바 내린 양== div 실제 높이

$('.lorem').on('scroll', function(){
  // var 스크롤양 = document.querySelector('.lorem').scrollTop;
  // var 실제높이 = document.querySelector('.lorem').scrollHeight;
  // scrolltop때문에 일치하지 않는 것. 따라서,
  // div 스크롤바 내린 양 + 110px 더해주어야함(높이) == div 실제 높이
  // div 스크롤바 내린 양 + 눈에 보이는 div 박스(높이) == div 실제 높이일때 alert 띄워주세요~
  // var 실제높이 = document.querySelector('.lorem').clientHeight;
  // console.log(스크롤양, 실제높이) //콘솔 찍어보니 일치하지 않음
})

// 본격적으로 숙제2 해보기
document.querySelector(".lorem").addEventListener("scroll", function(){
  var 스크롤양 = document.querySelector('.lorem').scrollTop;
  var 실제높이 = document.querySelector('.lorem').scrollHeight;
  var 높이 = document.querySelector('.lorem').clientHeight;
  console.log(스크롤양, 높이, 실제높이); 

  // feat: 이렇게하면 절대값이 아니라, 실제 높이가 10px 차이날 때 알럿 띄워줄 수 있음
  if(스크롤양 + 높이 > 실제높이 - 10 ){
    alert("다읽음");
  }
  // if(document.querySelector(".lorem").scrollY = 132 ){
  //   alert("높이 132");
  // }
})

/*
스크롤 다룰 때 주의점
1. 스크롤 이벤트리스너 안의 코드는 1초에 60번 이상 실행됨. 넘 많이쓰면안됨
2. 바닥체크도 여러번 중복으로 해줄듯. ex) alert 두번 뜨지 않게 주의
Q. 현재페이지 끝까지 스크롤 체크는? 2번 faet와 같음. html태그를 찾아서 쓰면 됨!
*/

document.querySelector('html').scrollTop;  //현재 웹페이지 스크롤양
document.querySelector('html').scrollHeight; //현재 웹페이지 실제높이
document.querySelector('html').clientHeight; //현재 웹페이지 보이는 높이임

// 위: 요약본..

document.querySelector('html').scrollHeight //1. 현재 웹페이지 높이 나옴. 페이지 로드완료시 정확. <body>끝나기 전에 넣는 게 굿!
document.documentElement.scrollHeight //document.querySelector('html'). = documentElement... html 찾은 거랑 똑같음

document.querySelector('html').clientHeightHeight //2. 현재 웹페이지 '보이는 높이ㅣ, 브라우저 높이'

document.querySelector('html').scrollTop //3. 현재페이지 스크롤 체크
window.scrollY // 현재페이지 스크롤 체크 = 위와 같음

/**
1. 스크롤바 조작할 때마다 코드실행 가능하구나
2. 박스의 실제높이/보이는 높이 구할 수 있구나
3. 스크ㅜ롷ㄹ양도 구할 수 있군
 */