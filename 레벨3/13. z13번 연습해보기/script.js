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

// =========================================
/*
1. 구매버튼 누르면
2. 지금 누른 버튼 윗윗 글자 가져와서
3. localStorage에 [글자] 저장한다
 */

$(".buy").click(function(e){
  const title = $(e.target).siblings("h5").text();
  // console.log(title);
  
  const newTitle = localStorage.setItem('cart', title);
  // console.log(newTitle);
  
  const 꺼낸거 = localStorage.getItem('cart')
  // console.log(꺼낸거);

  // JSON.parse(꺼낸거)
  console.log(JSON.parse(꺼낸거))
  // console.log(JSON.parse(꺼낸거)[0]);
})
