/*
1. 서버: 데이터 달라고 하면 데이터 보내주는 프로그램
유저 <=> 서버
[서버코드] 누가 이미지 달라하면 주는 코드
-어떤 데이터를, 어떤 메소드로 달라할지

1. 어떤 데이터인지
데이터 url (comic.naver.com)
2, 어떤 방법으로 요청할 것인지 잘 기재해야 데이터 줌
GET인지 POST인지 잘 기재해야 줌
GET: 데이터 읽고싶을 때
POST: 데이터 보낼 때
ex) 웹툰줘: 저 url을 GET요청한다.
서버개발자들이 API 작성해놓은 것 보고 하는 것

3. 특정 url로 GET요청하는 법
POST 요청하는 법
<form action="/url기입, 이 경로로 요청됨" method="post"></form>
form-유저데이터 DB에 저장하기

4. GET/POST 요청하면 브라우저 새로고침됨-해결법
ajax기능 통해 해결

5. ajax란?
새로고침없이 GET,POST요청하는 기능
ex)쇼핑몰-상품더보기버튼을 통해 서버랑 통신해서 추가로 상품 보여주기 등

*/

// 1. ajax로 GET요청하는법
$.get("https://codingapple1.github.io/hello.txt").done(function () {
  console.log("ajax성공")
});
// 실제로 받아온 데이터는 어디있냐? 파라미터 넣어주기 
$.get("https://codingapple1.github.io/hello.txt").done(function (data) {
  console.log(data)
});

// 2. ajax로 POST요청하는법, post로 바꿔주기만 하면 됨(포스트 입력 받아줄 서버 없기에 일단 여기선 오류날 것임)
//  name: kim 데이터가 서버로 전달됨 ex) 로그인, 댓글입력 등
// $.post("https://codingapple1.github.io/hello.txt", {name: 'kim'}).done(function (data) {
  //   console.log(data)
  // });
  
  //3.ajax요청 실패 시 특정 코드 실행하고 싶다면?
  // 404: url 주소가 이상하다는 뜻
  $.get("https://codingapple1.github.io/hello.txt1231ㄷㄱ").done(function (data) {
    console.log(data)
  }).fail(function(){
    console.log("ajax요청 실패함")
  });

  // 4. get요청하면  콘솔에 출력해보자
  // 서버에서 작성해놓은 API문서에 따라 겟, 포스트로 서버와 통신해나가면 됨
  $.get("https://codingapple1.github.io/price.json").done(function (data) {
    console.log(data) //{price: 5000} 출력
    console.log(data.price) //5000 출력
  })

/* 쌩자바스크립트는 fetch 이런거써서 AJAX 요청가능
근데 코드가 한 줄 더 필요한 이유가 뭐냐면 

서버와 데이터를 주고받을 때는 문자만 주고받을 수 있습니다.
array, object 이런거 전송불가능
근데 아까 { price : 5000 } 이런 object 무리없이 받아왔죠?
어떻게 한거냐면 object를 JSON으로 바꿔서 전송해줘서 그렇습니다.


array 아니면 object에 따옴표를 다 쳐서 '{ "price" : 5000 }' 대충 이렇게 만들면 JSON이라는 자료가 됩니다. 
JSON은 문자로 인식하기 때문에 서버와 데이터주고받기가 가능합니다. 

하지만 

jQuery의 $.get() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔줍니다.
기본함수 fetch() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔주지 않습니다.
그래서 fetch() 로 가져온 결과를 array/object로 바꾸고 싶으면 res.json() 이런 코드 한 줄 추가하면 됩니다. 

그게 귀찮으면 jQuery나 axios 이런 라이브러리 설치하면 ajax가 약간 더 간편해집니다.
*/

fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json()) //받아온 JSON을 object로 바꿔주는 기능
  .then(function(data){
    console.log(data)
    console.log("자바스크립트로 성공")
  })
  .catch(function(error){
    console.log('실패함')
  });
