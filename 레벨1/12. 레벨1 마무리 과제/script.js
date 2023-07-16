// 과제1: 3의 배수에서 박수치기

function 삼육구게임 (number){
    if ( number % 3 === 0 ) {
        console.log('과제1-박수');
        document.querySelector('.gameclass').innerHTML = '과제1-박수'
    } else {
        console.log('배수x');
        document.querySelector('.gameclass').innerHTML = '배수X'
    }
}
삼육구게임(3);



// 과제2: 3의 배수 박수 + 9의 배수에서 박수 두번

function 삼육구게임2 (number){
    if ( number % 9 === 0 ) {
        console.log('과제2-9배수');

    } else if ( number % 3 === 0){
        console.log('과제2-3배수');
    }
    else {
        console.log('과제2-배수X');
    } 
}
삼육구게임2(18);



// 과제3: 시험점수 입력하면 합격/불합격 알려주는 함수 만들기
// function 합격여부(num1, num2) {
//     if (num1 < 40 || num2 < 4){
//         console.log('불합격1')
//     } else if (num1 + num2 >= 120){
//         console.log('합격')
//     } else {
//         console.log('불합격2')
//     }
// }

function 합격여부(num1, num2) {
    if (num1 + num2 >= 120){
        console.log('합격')
    } else if (num1 < 40 || num2 < 40){
        console.log('불합격')
    } else {
        console.log('불합격2')
    } 
}
const a = 30
const b = 50
합격여부(a, b);

// 숫자가 아닌 경우 경고메세지
function 합격여부(num1, num2) {
    if (Number.isNaN(num1, num2) === false){
        // console.log('숫자 입력하세요1')
        // alert('숫자 입력하세요2')
    }
}
// a = 'ㄹㄹㄹ'
// b = 'ㅇㅇㄹ'
// 합격여부(a, b);

// 인자 = 파라미터. 함수에 들어가는 값