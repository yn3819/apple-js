
document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show-modal');
});
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
});

/* 과제 2 ============================================================
지금은 아무 것도 입력 안해도 전송됨
전송버튼 누를 때 첫째 <input>에 입력된 게 없으면 alert 띄우기

한글부터 작성
1. 전송버튼 누르면 (이벤트리스너),
2. input에 입력한 값이 공백이면( if 조건문 ),
3. 알림창 띄워주세요 (이벤트리스너)

*폼 전송 누를 때 type=submit라는 이벤트도 같이 발생함
*/

/*============================================================
$('#send').on('click', function(){  //1. 전송버튼 누르면 (이벤트리스너),
    if ( "input에 입력한 값"이 "공백"이면 ){
        알림창 띄워주세요
    }
}); 
*/
// ============================================================
// document.getElementById('email').value; 
// 유저가 <input>에 입력한 값. (가져올 수 있음. 콘솔에 입력해보기)

$('#send').on('click', function(){  //1. 전송버튼 누르면 (이벤트리스너),
    if (document.getElementById('email').value == ''){
        alert('아이디 입력 안함');
    }
})

// 폼 전송 막으려면
$('form').on('submit', function(e){  //1. 전송버튼 누르면 (이벤트리스너),
    e.preventDefault();
});

/*============================================================
if (조건) {
    조건이 참일 때 실행할 코드
}

if (조건) {
    조건이 참일 때 실행할 코드
} else {
    위 조건이 참이 아닐 때 실행할 코드
}

비교연산자=====================================================
== 같다
< , >
<= , >=
*/

if(3 >= 1){
    console.log('안녕');
}
if(1 <= 3){
    console.log('안녕-작거나같다');
}
// =============================
if(3 < 1){
    console.log('하이');
} else {
    console.log('하이2');
}