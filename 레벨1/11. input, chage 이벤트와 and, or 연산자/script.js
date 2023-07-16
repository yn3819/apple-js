
document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show-modal');
});
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
});
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


if (0){
    console.log('안녕');
}
/**
=== : 엄격한 비교    1 === '1' : false. 타입까지 같아야 함
== : 느슨한 비교     1 === '1' : true.
 */


/**
<true로 인식하는 자료들>
0제외 모든 숫자
'아무 문자'
[]
{}

<false로 인식하는 자료들>
0
''
null
undefined
NaN

 */

// 조건 2개 이상을 동시에 비교하고 싶다면 && 그리고 || 연산자
// && (그리고) : 둘 다 참이면 - 전체를 참으로 해달라
// || (or) : 둘 중 하나가 참이면 - 참으로 해달라
if ( 1 === 1 || 2 === 3){
    console.log('안녕22');
}
if ( 1 === 1 || 2 === 3 && 3 === 3){
    console.log('안녕33');
}