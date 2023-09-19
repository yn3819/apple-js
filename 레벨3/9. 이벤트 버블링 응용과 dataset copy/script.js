// = document.querySelector('.title').innerHTML = car2['name'] //변수넣기 가능
// document.querySelector('.title').innerHTML = car2.name //변수넣기 불가능

// => 데이터바인딩에서 있나 확인하기(레벨3 첫번째)

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// 이거 읽어보기
document.querySelectorAll('.card-body h5')[0].innerHTML = products[0]['title']

// console.log(products[0])