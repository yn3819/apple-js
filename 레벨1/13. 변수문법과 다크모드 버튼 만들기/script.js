// 1. badge 1회 클릭 시 내부 글자를 light로 변경
// badge 2회 클릭 시 내부 글자를 dark로 변경 .... 무한히 짜야함

// badge 클릭 횟수가 홀수면 내부 글자를 light로 변경
// badge 클릭 횟수가 짝수면 내부 글자를 dark로 변경

// 2. 몇번 클릭했는지 알려주어야 할듯

// var 변수이름 = 변수에 넣을 값;
// = : 오른쪽을 왼쪽에 넣어줘

var 나이 = 21;
console.log(나이);

var 이름 = 'kim';
console.log(이름);

// 변수 쓰는 이유
// 1. 길고 복잡한 자료들 저장 가능 / var 인사 = '안녕하세요 반갑습니다 어쩌고~~~'
// 2. 특정 값을 기억하게 만들고 싶어서 / var const = 0; 클릭횟수가 0,1,2,3,4... 증가.
// 3. 모든 자료 넣을 수 있음 / var 변수 = document.getElementById()

// 2-1. badge 클릭횟수 기록해두자
// var count = 0;
// $('.badge').on('click', function(){
//     //세 가지 방법
//     count++;
//     count += 1; //1 더해달라
//     count = count + 1; // 0 + 1. 카운트에 넣어달라는 뜻
//     console.log(count);
// });

// 3. 다크모드 변수만들기
/*
var count = 0;
$('.badge').on('click', function(){
    count += 1;
    if(클릭횟수가 홀수면){
        내부글자를 light로 변경
    }
    else if (클릭횟수가 짝수면){
        내부글자를 dark로 변경
    }
});
*/

var count = 0;
$('.badge').on('click', function(){
    count += 1;
    if(count % 2 == 0){
        $('.badge').html('Dark 🔄')
        $()
    } else{
        $('.badge').html('lihgt 🔄')
    }
});

console.log('===============');
// 1. 변수 선언 : 변수 만들어 쓰겠습니다.
// * var 이름 = 'kim';
var 임씨; 
console.log(임씨);
// 콘솔에 이름 입력. 이렇게 '할당' 안하면 undefined : 정의되지 않았다=할당되지 않았다?라고뜸

// 2. 변수 할당
임씨 = 'kim'; 
console.log(임씨);

임씨 = 'park'; //재할당
console.log(임씨);

console.log('===============');

// 3. 변수의 범위함수 안에서 만든 변수는 함수 내에서만 쓸 수 있음
function 함수() {
    var 김씨 = 'kim';
    console.log(김씨);
}

// console.log(김씨); //바깥에서 변수 쓰면 없다고 나옴
// 함수();

console.log('===============');
//4. 함수 바깥에서 만든 변수는 함수 안에서 사용 가능
var 박씨 = 'park';
function 함수(){
    console.log(박씨);
    박씨
}

//==========================================================

//5. var / const / let 차이

//1) var
// 재선언 O + 재할당 O / 범위 function
var 이름 = 'kim';
// var 이름 = 'kim';
// var 이름 = 'park'; (O) - 같은 이름의 변수 중복선언 가능(덮어쓰기)


// 2) let
// 재선언 X(중복선언x) + 재할당 O + 범위 { }

// 재선언 불가 : 똑같은 이름으로 선언 불가. 실수 방지 = const도 마찬가지
// let 이름 = 'kim';
// let 이름 = 'park'; (X)

// 3) const 
// 재선언 X + 재할당 X + 범위 { }                                
// 재선언 불가 + 재할당 불가 => 변하면 안되는 값을 보관하기 좋음
// const 이름 = 'kim';
// const 이름2 = 'park';

// 4) 범위
function 함수(){
    var 이름; //탈출 불가능
}
//이름 X (var는 탈출 불가능)


// let, const
// if () {
//     let 이름;
//     const 이름;
// }
//이름(없다고 뜸. 중괄호 내가 범위임)