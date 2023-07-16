

// fadeIn 애니메이션 추가: 이렇게 하는 것보다 CSS로 처리하는 게 좋음(성능때문)
// $('#login').on('click', function(){
//     $('.black-bg').fadeIn();
// });
// $('#close').on('click', function(){
//     $('.black-bg').fadeOut();
// });


 $('#login').on('click', function(){
    $('.black-bg').addClass('show-modal')
});
$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal')
}); 

/* 애니메이션 팁 
1. 접히는 애니메이션(아코디언) 슬라이드 업/다운
-css: 서브메뉴의 height 조절 / overflow:hidden;
*/