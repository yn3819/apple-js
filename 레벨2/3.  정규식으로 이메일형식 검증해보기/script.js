//콘솔에서 문자 있는지 검사하는 방법
//한글이 들어있냐, 영어 들어있냐, A로 끝나냐, 숫자가 1회 출현하냐 이런 건 못함

/*
'abc'.includes('a')

//정규식쓰면 문자검사 가능
/a/.test('abcde') //abcde 검사당할 문자

//a부터 z중 아무 글자 1개가 abcde에 들어있냐?
/[a-z]/.test('abcde') //true
/[A-Z]/.test('abcdeA') //true

//a부터 c중 아무 글자 1개가 e에 들어있냐?
/[a-c]/.test('e') //false

//아무 알파벳 1개가 들어있냐?
/[a-zA-Z]/.test('abcde')

//모든 한국어, 모음 등 따로 알아보기
/[ㄱ-ㅎ가-힣]/.test('바보')
/[0-9].test('바보')

//아무 한글 하나
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('반가워요')  //true

// 모든 문자
/\S/.test('ㅋㅋㅋㅋ') //백슬래시

//오른쪽 문자가 a로 시작하냐?뜻
/^a/.test('abs')

//오른쪽 문자가 a로 끝나냐?
/a$/.test('absa')

*백슬래시S 는 특수문자 포함 아무문자 1개라는 뜻입니다. 
*자판의 원화기호가 백슬래시입니다.
/\S/.test('abcde')   //true  

*^a 라고 적으면 a로 시작하는지 검사할 수 있습니다.
*e$ 라고 적으면 e로 끝나는지 검사할 수 있습니다.
/^a/.test('abcde')   //true
/e$/.test('abcde') //true  

*| 이건 or 기호입니다.
/(e|f)/.test('abcde')   //true

*+ 기호를 붙여주시면 뒤에 오는 글자들도 a와 일치하면 반복해서 쭉 찾아달라는 뜻입니다.
*왜냐면 /a/는 a를 다 찾으라는게 아니라 a 한개를 찾으라는 뜻입니다.
*aaaaa 이런걸 찾고 싶으면 /a+/ 쓰면 됩니다. 
/a+/


*모든 문자 여러개 다음에 t라는 글자가 있냐를 검사해주는 정규식입니다. 
*aaaaat 
/\S+t/

//더 있는데 찾아보기.......... 구글에 regex test 
*/
//====================================================================

// 폼 전송 막으려면
$("form").on("submit", function (e) {
  //1. 전송버튼 누르면 (이벤트리스너),
  e.preventDefault();
});

//
document.querySelector("#login").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});

// 여기서 조건문 추가해보기
// $('#send').on('click', function(){  //1. 전송버튼 누르면 (이벤트리스너),
//     if (document.getElementById('email').value == ''){
//         alert('아이디 입력 안함');
//     }
// })
// if (정규식 검사()){ }

$("form").on("submit", function () {
  var 입력한값 = document.getElementById("email").value;

  if (입력한값 == "") {
    alert("아이디 입력 안함");
  }
  if (/\S+@\S+\.\S+/.test(입력한값)) {
    alert("이메일 형식 아님");
  }
});



/*
이메일은 어쩌구@어쩌구.어쩌구 이렇게 되어야합니다.
모든 문자 사이에 @ 그리고 .이라는 특수문자가 와야합니다. 
/\S+@\S+\.\S+/
*/



//숙제: 폼 전송 시 유저가 입력한 비번에 영어대문자 있는지 검사
// /[A-Z]/.test('abcdeA') //true


$('form').on('submit',function(e){

    var 비번 = document.getElementById('pwd').value;
    if ( /[A-Z]/.test(비번) == false ){
      alert('대문자없는데요')
    } else{
        alert('대문자 있음')
    }
  
  });