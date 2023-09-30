// let car = '소나타';
// let carPrice = '50000';
// let carColor = 'white';

//1. array 자료형
let car = ["소나타", 50000, "white"];
console.log(car[0]);
// document.querySelect

// 자료 수정-추가
car[0] = "아반떼";
console.log(car[0]);

// 2. object 자료형
// 이름 붙여서 저장 가능한 게 장점
// key : value 형태로 저장이 장점
let car2 = { name: "소나타", price: 50000 };
console.log(car2["name"]); //[0] 숫자가 아닌, 자료이름(키) 입력
console.log(car2.price); // 이렇게 써도 ok

// 자료 수정/추가
car2.price = 70000;
console.log(car2.price); // 이렇게 써도 ok

/* 3. array, object 차이점
 array: 순서대로 저장 / object: 이름붙여서 저장 가능

 ex) 쇼핑몰: 장바구니 정보 10, 20개... 소나타/5만원/2025년식/흰색/에어컨추가/카드할인정보.....
=> 상품 데이터가 10,20개 넘어가면 오브젝트에 넣는 게 좋을듯
=> 가격을 꺼내와야할때 몇번째인지 외워야하지만, price를 기억하는 게 더 빠름 

  array: 순서 개념 없음. 따라서 자료간 정렬/자르기도 가능
  ex) car.sort();
*/

// 4. sort, slice
car.sort(); // sort: 숫자/영어/한글 가나다순
console.log(car);

car.slice(0, 1); // sort: 숫자/영어/한글 가나다순
console.log(car);

// 숙제
// 상품명/가격에 넣어보기

let car3 = {
  name: "소나타3",
  price: 55500,
};
document.querySelector("#itemName").innerHTML = car3['name'];
// document.querySelector("#itemName").innerHTML = car3.name;
document.querySelector("#price").innerHTML = car3.price;
