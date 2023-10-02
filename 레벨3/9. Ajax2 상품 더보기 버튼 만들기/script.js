var products = [
  { id: 0, price: 70000, title: "1. Blossom Dress" },
  { id: 1, price: 50000, title: "2. Springfield Shirt" },
  { id: 2, price: 601000, title: "3. Black Monastery" },
  // { id: 2, price: 601000, title: "3. Black Monastery" },
  // { id: 2, price: 601000, title: "3. Black Monastery" },
];

// 1. 자바스크립트로 템플릿 만들기
// let 템플릿 = `<div class="col-sm-4 card">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>Card title</h5>
// <p>가격 : 70000</p>
// </div> `;
// $(".row").append(템플릿);

// 2. 템플릿에 데이터 넣기
// let 템플릿 = `<div class="col-sm-4 card">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${products[0].title}</h5>
// <p>${products[0].price}</p>
// </div> `;
// $(".row").append(템플릿);

// 3. 반복문으로 변경(카드 3개니까)
// let 템플릿 = `<div class="col-sm-4 card">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${products[0].title}</h5>
// <p>${products[0].price}</p>
// </div> `;

// for (let 템플릿 = 0; 템플릿 < 3; 템플릿++) {
//   $(".row").append(템플릿);
// }

// 코딩애플 방법
// a 작명한 것=프로덕션에 있는 하나하나의 데이터.
// a 처음에 돌땐 첫째줄, 두번째 돌땐 둘째줄...

products.forEach((a, i) => {
  let 템플릿 = `<div class="col-sm-4 card">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  </div> `;
  $(".row").append(템플릿);
  console.log(a);
});
/* 
<h5>${products[i].title}</h5>
<p>${products[i].price}</p>

윗줄 대신 아랫줄처럼 써도 됨. 왜 되지?
<h5>${a.title}</h5>
<p>${a.price}</p>
*/

// 데이터의 시작점은 어레이, 그 안에는 오브젝트.
// 4. 가져온 카드 데이터로 추가 카드 3개 더 만들기
// $("#more").click(function () {
//   $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
//     console.log(data);
//     // 카드레이아웃생성, 그 다음에 데이터 넣기

//     data.forEach((a, i) => {
//       let 템플릿 = `<div class="col-sm-4 card">
//       <img src="https://via.placeholder.com/600" class="w-100">
//       <h5>${a.title}</h5>
//       <p>${a.price}</p>
//       </div> `;
//       $(".row").append(템플릿);
//     });
//   });
// });
/*
<h5>${a.title}</h5>
<p>${a.price}</p> 
또는 아래도 가능
<h5>${data[i].title}</h5>
<p>${data[i].price}</p> 
*/

// 5. 숙제: 더보기버튼 2번 누르면 7,8,9나오는 것
// +버튼 못누르게, 사라지게 등
// 코드중복 발생중. 유사한 코드 줄여보기. 함수로 만들어놨다가...
// 함수 팁, 함수화할 때 변수 있으면 파라미터로 바꾸는 게 좋음
// a는 변수네? 이미 파라미터로 되어있음

$("#more").click(function () {
  if(click == 1){
    $.get("https://codingapple1.github.io/js/more1.json").done((data) => {

      data.forEach((a, i) => {
        let 템플릿 = `<div class="col-sm-4 card">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>${a.price}</p>
        </div> `;
        $(".row").append(템플릿);
      });
    });

  } else if(click ==2){
    $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
      data.forEach((a, i) => {
        let 템플릿 = `<div class="col-sm-4 card">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>${a.price}</p>
        </div> `;
        $(".row").append(템플릿);
      });
    });
  } else{
    $(".btn").css.display = none;
  }
});