//n초 후에 코드 실행해줘
/*
setTimeout(function(){
    실행 할 코드
}, ms)
*/
setTimeout(function(){
    console.log('안녕');
}, 1000)

setTimeout(function(){
    $('.alert').hide();
}, 2000)

// setInterval : 1초마다 콘솔에 찍어줌
// setInterval(function(){
//     console.log('안녕');
// }, 2000)

/*
*자바스크립트 문법
if var function

*브라우저 사용법. 웹 브라우저 API
document.querySelector()
setTimeout()
alert()

*/

// 콜백함수 자리엔 만들어둔 함수 넣을 수 있음
// setTimeout(function(){}, 2000)
setTimeout(함수, 2000)

// 이렇게도 되는데 오류 뜨긴 함
// addEventListener(function(){})
// addEventListener(함수)

function 함수 () {
    console.log('안녕2');
}

/* 숙제: 1초마다 5라는 문자를 1씩 감소
문자를 4로 바꿔주세요
문자를 3으로 바꿔주세요
문자를 2로 바꿔주세요
...
이걸 1초마다 계속 실행하면 됩니다. setInterval 쓰면 되겠군요. 
*/

var count2 = 5;

setInterval(function(){
    count2 -= 1;
    if (count2 >= 0){
        document.querySelector('#num').innerHTML = count2;
    } else{
        document.querySelector('#num').innerHTML = '끝났음'
    }
}, 1000);

/*(참고) 타이머를 삭제하고 싶으면

var 타이머 = setInterval(어쩌구);

이렇게 변수에 저장해둔 다음

타이머 삭제하고 싶을 때 clearTimeout(타이머) 이 코드 실행하면 됩니다. */