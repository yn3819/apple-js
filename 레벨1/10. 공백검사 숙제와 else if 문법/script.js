
document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show-modal');
});
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
});

/*============================================================

// document.getElementById('email').value; 
// 유저가 <input>에 입력한 값. (가져올 수 있음. 콘솔에 입력해보기)
*/

$('#send').on('click', function(){  
    if (document.getElementById('email').value == ''){
        alert('아이디 입력 안함');
    }
})

// 폼 전송 막으려면
$('form').on('submit', function(e){ 
    e.preventDefault();
});


/*============================================================
*/

// else문 붙어있으면, 앞의 조건식이 참이면 else 문 뒤는 아예 실행 안됩니다.
if (1 == 3){
    console.log('맞아요1');
} else if (3 == 3){
    console.log('맞아요2');
} else if (4 == 3){
    console.log('맞아요3');
} else if (3 == 3){
    console.log('맞아요4');
}

// 앞의 조건식과 상관없이 둘째 if문도 실행됨
if (1 == 3){
    console.log('맞1');
} 
if (3 == 3){
    console.log('맞2');
} 

// 과제 : 전송 누르면 아이디/비번 입력란 둘 다 공백 검사-alert
// 과제 : 비번이 6자 미만이면 더 길게 입력하라고 안내문 띄우기

$('#send').on('click', function(){  //1. 전송버튼 누르면 (이벤트리스너),
    if (document.getElementById('email').value == ''){
        alert('아이디 입력 안함');
    } else if(document.getElementById('password').value == ''){
        alert('비번 입력 안함');
    } else if(document.getElementById('password').value.length < 6 ){
        alert('비번 6자리 이상 입력하세요');
    }
});