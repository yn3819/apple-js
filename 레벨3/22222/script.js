// 1. object 안에 아무거나 다 넣을 수 있음: 오브젝트, 어레이 가능
// array 안에 아무거나 다 넣을 수 있음: 오브젝트, 어레이 가능

let car2 = {
  name: "소나타3",
  price: [50000, 3000, 4000],
};
document.querySelector("#itemName").innerHTML = car2["name"];
// document.querySelector("#itemName").innerHTML = car3.name;
document.querySelector("#price").innerHTML = car2.price;
console.log(car2['name']);
console.log(car2['price']);
console.log(car2['price'][1]); //3000
console.log(car2.price);
console.log(car2.price[0]); //50000
// 중괄호로 시작: 무조건 오브젝트자료임 -> ['']
// 프론트엔드: 데이터 꺼내는 일이 많음
// 복잡하게 생긴 어레이, 오브젝트 자료 다룰 땐: 출력해보고 시작기호도 확인해보면 좋음

//1. 서버 사이드 렌더링: 서버가 html 다 만들어야해서 서버가 귀찮음
//2. 클라이언트 사이드 렌더링: 서버가 편함 (지금 하는 것들이 이런 것, 요즘 추세)
//html에다가 데이터를 꽂는 것 = 데이버바인딩. 쉽게 해주는 라이브러리>제이쿼리, 리액트, 뷰

//숙제=========================
//list.html 다 복붙하고 시작, 

//서버에서 가져온 데이터라 생각하고 꽂아넣기, ex)반복문...
var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];