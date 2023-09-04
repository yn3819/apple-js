// 로그인 누르면 모달창 뜹니다
// 배경 누르면 꺼짐
document.querySelector('#login').addEventListener('click', function(e){
  document.querySelector('.black-bg').classList.add('show-modal');
});

// 1번 이벤트 버블링 발생
document.querySelector('.black-bg').addEventListener('click', function(e){
  document.querySelector('.black-bg').classList.remove('show-modal');
});

/* 
유용한 이벤트관련 함수들
function(e) 쓰면 사용 가능

  e.target; //유저가 실제로 누른 거
  e.currentTarget // =this; 이벤트리스너 달린곳
  e.preventDefault //이벤트 기본동작 막아줌(클릭 안한것처럼)
  e.stopPropagation // 내 상위요소로 이벤트 버블링 막아줌
  console.log(e.target);

*/

// 2번
document.querySelector('.black-bg').addEventListener('click', function(e){
  
  // 같다고 비교할 수 있나? 출력해보기
  // 까만 배경 눌렀을 때 balck-bg 나옴
  // console.log(e.target)
  // console.log(document.querySelector('.black-bg'))

// if(내가 클릭한 거 = 블랙 배경)
  if(e.target == document.querySelector('.black-bg')){
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
});

// 3번 제이쿼리로(=2번)
// 제이쿼리는 비교하는 함수가 다름
document.querySelector('.black-bg').addEventListener('click', function(e){
  if($(e.target) == $('.black-bg')){
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
  // e.stopPropagation // 내 상위요소로 이벤트 버블링 막아줌
  
});



























//======== 준비된 것



// document.querySelector('#close').addEventListener('click', function(){
//   document.querySelector('.black-bg').classList.remove('show-modal');
// });


// 폼 전송 막으려면
$('form').on('submit', function(e){  //1. 전송버튼 누르면 (이벤트리스너),
  e.preventDefault();
});

//====================================================================

// 콘솔에 입력하면 아이디 값 알려줌
document.getElementById('email').value

// 이메일 클릭하면 ~~ 함수 실행
document.getElementById('email').addEventListener('click', function(){
})

// <input> 에서 일어나는 input 이벤트
// email: 여기 유저가 입력한 값이 변할 때 실행됨
document.getElementById('email').addEventListener('input', function(){
  console.log('인풋-변했음');
})

//  change , 인풋이벤트랑 비슷하지만 <input>에 입력한 값이 바뀌고 포커스를 잃을 때 발생함
document.getElementById('email').addEventListener('change', function(){
  console.log('체인지-변했음');
})
//====================================================================

$('#send').on('click', function(){  //1. 전송버튼 누르면 (이벤트리스너),
  if (document.getElementById('email').value == ''){
      alert('아이디 입력 안함');
  } 
})

