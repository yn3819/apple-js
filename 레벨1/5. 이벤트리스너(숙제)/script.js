  // 1) p태그 내용을 아이디 입력으로 바꿈.
    // document.getElementById('title').innerHTML = '아이디입력하셈';



    // 2) 띄움
    // document.getElementById('alert').style.display = block;
    


    // 3) 지우고 함수로 축약해보자

    function 아이디알림창(){
        document.getElementById('title').innerHTML = '아이디 입력하셈';
        document.getElementById('alert').style.display = 'block';
    }

    function 비번알림창(){
        document.getElementById('title').innerHTML = '비번 입력하셈';
        document.getElementById('alert').style.display = 'block';
    }

// => 파라미터로 해보기
    function 숙제알림창(구멍1, 구멍2){
        document.getElementById('title').innerHTML = '아이디 입력하셈';
        document.getElementById('alert').style.display = 'block';
    }
    // 숙제알림창(구멍1, 구멍2);





    // 알림창 닫기
    function 알림창열기(구멍) {
        document.getElementById('alert').style.display = 구멍;
    }

