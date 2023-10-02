var products = [
  { id: 0, price: 70000, title: "1. Blossom Dress" },
  { id: 1, price: 50000, title: "2. Springfield Shirt" },
  { id: 2, price: 60000, title: "3. Black Monastery" },
];

products.forEach((a, i) => {
  let 템플릿 = `<div class="col-sm-4 card">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  </div> `;
  $(".row").append(템플릿);
  console.log(a);
});


// 4. 가격순으로하려면?
// 여기서 a,b는 {}, {} 따라서, a - b는 {} - {}
$("#price").click(function(){
  products.sort(function (a, b) {
    return a - b;
  });
})

// 5. 따라서 숫자들을 뺄 수 있도록 작성해주어야함. 버튼 누르면 콘솔에 찍힘. 
// html에다가도 정렬순으로 나오게 하려면?
$("#price").click(function(){
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(products);

  //html 싹 비웠다가 다시 생성해주세요
  $(".row").html('');

  products.forEach((a, i) => {
    let 템플릿 = `<div class="col-sm-4 card">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    </div> `;
    $(".row").append(템플릿);
    console.log(a);
  });
})

// 1. 정렬 sort==============================
/*sort: 문자순으로 정렬
 */
const array = [7, 3, 5, 2, 40];
//[2, 4, 40, 6, 7] 문자순으로 정렬
array.sort();

// 숫자, 오름차순(순차) 정렬 [2, 3, 5, 7, 40]
// a, b는 7,3과 같은 하나 하나의 데이터임
array.sort(function (a, b) {
  return a - b;
});

// 숫자, 내림차순(역순) 정렬 [40, 7, 5, 3, 2]
array.sort(function (a, b) {
  return b - a;
});

console.log(array);

const array2 = ["a", "b", "c"];

// 가나다순
array2.sort();

// 가나다 역순????? 다음강의에 있음==============================================
array2.sort(function (a, b) {
  return ( b < a ) ? -1 : ( b == a ) ? 0 : 1;
});

console.log(array2 +"가나다역순");

// 2. 정렬 filter() : 결과는 변수에 저장해서 써야함==============================
const array3 = [7, 3, 5, 2, 40];

// const newarray = array.filter(function(a){
//   return 조건식
// });

// 4미만의 자료 남기고싶음
let newarray = array3.filter(function(a){
  return a < 4
});
console.log('filter:' + newarray);

//sort(): 원본 변형 O
//filter(): 원본 변형 X


// 3.array 자료 전부 변형하려면 map()===========================================
// ex) 게임, 달러, 통화, 유로로 변환할 때 거기에 맞는 가격으로 변환해서 보여줌 a*1000 환율곱하기 등
let newarray2 = array3.map(function(a){
  return a * 4
});
console.log('map:' + newarray2);

// 숙제1 상품순, 다나가 정렬
// 숙제2 6만원 이하 상품만 보기 정렬(다음영상에)