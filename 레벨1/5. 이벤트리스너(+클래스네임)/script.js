// 클래스명은 여러 개이기 때문에 [0] 해줘야 함

    function 아이디알림창(){
        document.getElementById('title').innerHTML = '아이디 입력하셈';
        document.getElementById('alert').style.display = 'block';
    }

    function 비번알림창(){
        document.getElementById('title').innerHTML = '비번 입력하셈';
        document.getElementById('alert').style.display = 'block';
    }


// 이벤트리스너 (감시자 역할)
// 1) 원하는 요소 찾고 
// 2) 이벤트붙이기 (파라미터 두개), 펑션에 클릭시 실행할 코드 붙이기
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('alert').style.display = 'none';
});

// 이벤트: 클릭, 키 입력, 스크롤, 드래그 등
// click, keydown, mouseover, ...

// function(){} = 콜백함수(파라미터 자리에 들어가는 함수)

// 알림창 닫기
// function 알림창열기(구멍) {
//     document.getElementById('alert').style.display = 구멍;
// }