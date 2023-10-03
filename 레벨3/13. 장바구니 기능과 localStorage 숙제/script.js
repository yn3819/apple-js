var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Clack Monastery" },
];

// 기본세팅
products.forEach((a, i) => {
  let 템플릿 = `<div class="col-sm-4 card">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>${products[i].price}</p>
  <button class="buy">버튼</button>
  </div> `;
  $(".row").append(템플릿);
  // console.log(a);
});

// 기본세팅-따라서 숫자들을 뺄 수 있도록 작성해주어야함. 버튼 누르면 콘솔에 찍힘.
// html에다가도 정렬순으로 나오게 하려면?
// $("#price").click(function () {
//   products.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   console.log(products);

//   //html 싹 비웠다가 다시 생성해주세요
//   $(".row").html("");

//   products.forEach((a, i) => {
//     let 템플릿 = `<div class="col-sm-4 card">
//     <img src="https://via.placeholder.com/600" class="w-100">
//     <h5>${products[i].title}</h5>
//     <p>${products[i].price}</p>
//     </div> `;
//     $(".row").append(템플릿);
//     <button class="buy">버튼</button>
//     console.log(a);
//   });
// });

// =====================================================

/* 숙제1: 구매버튼 누르면 누른 상품명 localStorage에 저장하기 ex) cart. arrayl 로 추가됨
 힌트: 내 형제요소(시블링)찾는법 알아봐야함, 로컬스토리지 비어있을때,
뭐가 있을 떄 저장방식 뭔가 다를듯. 
구매버튼누를때 카트 항목 없으면 어레이 추가해야함. 이미 항목 있으면,
어레이 추가해주세요-가아니라 수정해주세요- 여야 함
*/

/*
1번
1) 구매버튼 누르면
2) 지금 누른 버튼 윗윗 글자 가져와서
3) localStorage에 [글자] 저장한다
 */
// ==============================

// document.querySelectorAll('.buy')  // 불가. 자스에서는 한 요소에만 이벤트리스너 부착 가능
// 따라서 지금 버튼 3개이니, ('.buy')[0] 이런식으로 3개 다 달아주어야 함. 혹은 이벤트 버블링 맨윗요소 하나만 해서 하기

$(".buy").click(function (e) {
  let title = $(e.target).siblings("h5").text();
  // 3번 정리
  // 만약 이미 cart라는 항목 있으면, 수정하기~ 
  // 근데 그게 아니면 ~ 요거하기

  if(localStorage.getItem('cart') !== null ){
    // 2번. 로컬스토리지 보니, 덮어쓰기 함. 어떻게 수정할까? 
    // localStorage에 있던 array 1) 꺼내서 2) 자료 추가하고 3) 다시 넣기

    // localStorage.getItem("cart") 해도됨
    var 꺼낸거 = JSON.parse(localStorage.cart);
    console.log(꺼낸거)
    꺼낸거.push(title) //push: 글자입력
    localStorage.setItem('cart', JSON.stringify([꺼낸거]));

  } else{
    localStorage.setItem("cart", JSON.stringify([title])); //JSON 화시키기

  }
  // console.log(title);
});


// 숙제2: cart.html 방문시 로컬스토리지에 저장된 상품명들 다 보여주기
//로컬스토리지에서 cart 꺼내주세요
// array 남을듯
// array 개수만큼 p 생성해주셈(바인딩)
// 숙제1에서 array 안의 중복제거는?(응용) 저장안되거나, 상품수량이 기입됨(오브젝트나 어레이로)

