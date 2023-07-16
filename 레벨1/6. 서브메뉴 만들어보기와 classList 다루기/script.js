// 방법1) display: none/block
// 방법2) 클래스 부착식
// 장점: 애니메이션 추가 쉬움 / 나중에 재사용 편리
// ex) 버튼 누르면 show 해주세요

// document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
//     // document.getElementsByClassName('list-group')[0].classList.add('show');
//     document.getElementsByClassName('list-group')[0].classList.toggle('show');
// });

// 버튼 한 번 더 누르면 숨기기
// 1) 버튼 짝수번 누르면 show 제거 2) 버튼 누를 때 show가 이미 있으면 제거
// 지금은 일단 add를 toggle로: show가 있으면 제거, 없으면 추가

//=================================================================

/*
셀렉터 더 쉽게하는 방법 querySelector
ex) ul 선택하고 싶다면? 아이디 주고 선택해도 됨. #test

querySelector = css 문법 그대로 쓸 수 있는 셀렉터 (인덱싱x)
querySelectorAll('')[] 인덱싱 해주어야 함

-그러나 클래스일 경우, 맨 위에 나오는 한 개만 찾아줌 
-따라서, list-group-item 세컨드 아이템 찾고 싶을 경우, querySelectorAll로 작성하고, 인덱싱하기
ex) document.querySelectorAll('.list-group-item')[1]
*/

// 과제: querySelector 바꿔보기
// document.querySelector('.navbar-toggler').addEventListener('click', function(){
//     document.querySelector('.list-group').classList.toggle('show');
// });

// 과제: querySelectorAll 바꿔보기 - 인덱싱해주기
document.querySelectorAll('.navbar-toggler')[0].addEventListener('click', function(){
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
});