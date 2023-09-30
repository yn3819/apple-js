/* 어떨 때 .form-hide 떼야돼?
  =유저가 셔츠 골랐을 때 떼주기
*/

// 1. if (유저가 선택한 게 == 셔츠면 클래스명 뗴줘){ }
$(".form-select").eq(0).val() //콘솔 찍어보면 모자-모자, 셔츠-셔츠 뜸
console.log($(".form-select").eq(0).val()); //모자
const value = $(".form-select").eq(0).val();
console.log(value);

// if(value == '셔츠'){
//   $(".form-select").eq(1).removeClass("form-hide");
// }

/* 작동 안 될 거임. 스크립트 안에 대충 적은 코드는 페이지 로드 시 1회만 실행됨
유저가 선택할 때마다 저 코드 실행해야 할듯
이벤트리스너: 유저가 인풋 값 변경할 때마다 event발생함 input, change 발생할때마다 저 코드 실행하면 될듯
*/

//2. input 이벤트: 유저가 input값 변경할 때 input 이벤트 발동함

$(".form-select").eq(0).on('input', function(){
  const value = $(".form-select").eq(0).val();
  if(value == '셔츠'){
    $(".form-select").eq(1).removeClass("form-hide");
  }
})

// 3. 다시 모자 선택하면 셀렉터 사라지게
// const value2 = $(".form-select").eq(1).val();
// console.log(value2 + '111');

$(".form-select").eq(0).on('input', function(){
  // const value = $(".form-select").eq(0).val();
  const value = this.value;
  // const value = e.currentTarget.value; 
  //지금 이벤트리스너 달린곳.  코드 내에서 e가 정의되지 않는다는 에러 : 펑션에 e넣어주어야함. e를 함수 매개변수로 받아와서 currentTarget을 사용할 수 있음.
  if(value == '모자'){
    $(".form-select").eq(1).addClass("form-hide");
  }
})