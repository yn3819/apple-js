var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Clack Monastery" },
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

// 기본세팅-따라서 숫자들을 뺄 수 있도록 작성해주어야함. 버튼 누르면 콘솔에 찍힘.
// html에다가도 정렬순으로 나오게 하려면?
$("#price").click(function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(products);

  //html 싹 비웠다가 다시 생성해주세요
  $(".row").html("");

  products.forEach((a, i) => {
    let 템플릿 = `<div class="col-sm-4 card">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    </div> `;
    $(".row").append(템플릿);
    console.log(a);
  });
});

// =====================================================

// 1. 상품순, 다나가 정렬 sort
const 어레이 = ["가", "나", "다", "가"];
//순차정렬
어레이.sort;

//역순정렬
//return 양수 > a 우측으로 감
//return 음수 > b 우측으로 감
//a,b - 가, 다일경우 리턴 양수
//a,b - 다, 나일경우 리턴 음수
//a,b - 가, 나일경우 리턴 양수
// ... => 규칙: a<b 양수리턴 / 그 외에는 음수리턴
// 가, 가 같은 거면 리턴 0해주기
어레이.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(어레이);

// 1-2. a,b 바꿔주기
$("#name").click(function () {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(products);

  $(".row").html("");

  products.forEach((a, i) => {
    let 템플릿 = `<div class="col-sm-4 card">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    </div> `;
    $(".row").append(템플릿);
    console.log(a);
  });
});


// 2-1. 6만원 이하 상품만 보기 정렬 filter

$("#six").click(function(){
  let newProduct = products.filter(function(a){
    return a.price <= 60000
  });
  // console.log("filter:"+newProduct); 이렇게 쓰면 안됨
  console.log("filter:",newProduct);
});


// 2-2. forEach, h5, p태그 등 products가 아니라 newproduct로 바뀌어야함
$("#six").click(function () {
  
  let newProduct = products.filter(function(a){
    return a.price <= 60000
  });
  console.log("filter:",newProduct);

  $(".row").html("");

  newProduct.forEach((a, i) => {
    let 템플릿 = `<div class="col-sm-4 card">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${newProduct[i].title}</h5>
    <p>${newProduct[i].price}</p>
    </div> `;
    $(".row").append(템플릿);
    console.log(a);
  });
});
