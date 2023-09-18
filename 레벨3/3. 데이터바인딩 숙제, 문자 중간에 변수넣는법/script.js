var products = [
  { id : 0, price : 70000, title : '1. Blossom Dress' },
  { id : 1, price : 50000, title : '2. Springfield Shirt' },
  { id : 2, price : 601000, title : '3. Black Monastery' },
  { id : 3, price : 40000, title : '4. 4444' }
];

console.log(products[0]);
console.log(products[0]['title']);
console.log(products[0].title);

// 1. 데이터바인딩 하는법
// document.querySelectorAll('.card-body h5')[0].innerHTML = products[0].title;
// document.querySelectorAll('.card-body p')[0].innerHTML = '가격은 : ' + products[0].price;
// document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
// document.querySelectorAll('.card-body p')[1].innerHTML = '가격은 : ' + products[1].price;

// 2. 제이쿼리로 해보기
// $('.card-body h5').eq(2).html(products[2].title);
// $('.card-body p').eq(2).html('가격은 : ' + products[2].price);

// 3. 문자 사이에 변수 넣는 법
var a = '안녕'
// 1) 방법1
// '문자' + a + '문자'
console.log('문자' + a + '문자1')
//2) 백팁: 엔터키치면 안되는데 백팁 안에서는 엔터 키 쳐도 문제 없음 ${변수}
// `문자 ${a} 문자`
console.log(`문자${a}문자2`)


//4. 똑같은코드 반복 : 반복문으로 짜기. 알아서 해보기. 카드 늘어나도 되는, 확장성 있는 코드로!!!
for(let i = 0; i < $('.card-body').length; i ++){
  $(".card-body h5").eq(i).html(products[i].title);
  $('.card-body p').eq(i).html('가격은 : ' + products[i].price);
}  