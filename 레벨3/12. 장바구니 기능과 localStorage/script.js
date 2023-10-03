var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Clack Monastery" },
];

// =====================================================


/* 
Q. 구매버튼 누르면 로컬스토리지에 상품명 추가?
=실제 서비스면 서버로 보냈을듯

변수: 새로고침할때마다 0으로 리셋됨(초기값)
영구적 저장으로 적합하지않음
브라우저 안에 몰래 데이터 저장가능

1. local Storage , session Storage
이름: 값 형태로 저장 가능
용량은 5mb
문자/숫자만 저장가능(오브젝트, 어레이 불가)
local Storage: 사이트 재접속해도 유지(유저가 청소하지 않는 한, 반영구적 데이터 저장)
ession Storage: 사이트 나가면 자동삭제

2. indexedDB
구조화된 대용량떼이터 저장(문법복잡)

3. Cookies
유저의 인증정보 저장 ex) 보통 로그인정보 저장

4. Cache Storage
html css js 파일 저장하는 곳
*/

// 1. localStorage 저장법, 지우는법
localStorage.setItem('이름', '값');
localStorage.setItem('kim', 20);
localStorage.removeItem('kim')

//2-1. array, object 저장하려면? 편법
// 문제: 어레이 -> 1,2,3 (문자로 강제변환됨)
localStorage.setItem('num', [1,2,3]) 

/* 해결: array/object -> JSON으로 바꾸면 저장 가능
 array, object => JSON : JSON.stringify()
 JSON => array, object : JSON.parse()
*/

// 2-2. JSON.stringify(), JSON.parse()
let arr = [1,2,3]
const newArr = JSON.stringify(arr);

localStorage.setItem('num', newArr) // [1,2,3] 어레이처럼(?) 잘 나옴
const 꺼낸거 = localStorage.getItem('num')
// console.log(꺼낸거); //[1,2,3] 어레이가 아니라, 문자임
// console.log(꺼낸거[0]); //따라서 이거 안 꺼내짐
JSON.parse(꺼낸거)
console.log(JSON.parse(꺼낸거)); //잘나옴
console.log(JSON.parse(꺼낸거)[0]);


/* 2-3. 세션 스토리지
sesstionStorage.setItem('num', newArr) 
const 꺼낸거 = sesstionStorage.getItem('num')
*/

// 3. localStorage 데이터 수정하는 법 
// 배열에 4추가하고 싶다면?
// 1. 자료꺼냄 2.꺼낸 거 수정함 3. 다시 넣음

/* 숙제1: 구매버튼 누르면 누른 상품명 localStorage에 저장하기 ex) cart. arrayl 로 추가됨
 힌트: 내 형제요소(시블링)찾는법 알아봐야함, 로컬스토리지 비어있을때,
뭐가 있을 떄 저장방식 뭔가 다를듯. 
구매버튼누를때 카트 항목 없으면 어레이 추가해야함. 이미 항목 있으면,
어레이 추가해주세요-가아니라 수정해주세요- 여야 함
*/
// 숙제2: cart.html 방문시 로컬스토리지에 저장된 상품명들 다 보여주기


