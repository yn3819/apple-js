
// document.querySelector('.navbar-toggler').addEventListener('click', function(){
//     document.querySelectorAll('.list-group')[0].classList.toggle('show');
// });

// 위와 똑같은 방법 - 셀렉터와 이벤트명이 짧아짐
// $ = document.querySelector, querySelectorAll = $ (셀렉터, All과 비슷)
// on = addEventListener = on (이벤트명)


$('.navbar-toggler').on('click', function(){
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
});

// document.querySelector('.hello').innerHTML = '바보';
// $('.hello').html('바보'); // .html = j쿼리문법
$('.hello').css('color', 'red'); // .css('속성', '값')
$('.hello').addClass('show');
$('.hello').removeClass('show');
$('.hello').toggleClass('show'); //클래스명을 뗏다붙였다 해줌

// 1. js : 3개 전부 바보로 바꾸려면? 한 번에 바꾸는 기능은 없음
// document.querySelectorAll('.hello')[0].innerHTML = '바보';
// document.querySelectorAll('.hello')[1].innerHTML = '바보';
// document.querySelectorAll('.hello')[2].innerHTML = '바보';

// jq : 한 번에 바꾸는 기능 있음, 따라서 한 줄 가능
$('.hello').html('바보');

/*
addEventListener() = on()
ex) on('click', function(){

    });
*/
// document.querySelector('#test-btn').addEventListener() //특정코드실행
$('#test-btn').on('click', function(){
    // $('.hello').hide(); //stlye, display: none; 해도 되고, hide로도 가능
    // $('.hello').fadeOut();
    $('.hello').slideUp();
});

// $('셀렉터')로 찾으면 제이쿼리 함수만 붙일 수 있음 ex) innerHTML 못붙임.
// querySelector('셀렉터') 자스 셀렉터로 찾으면 자바스크립트 함수만 붙일 수 있음.

// 과제 : show-modal 붙여주셈 
//방법1 : 자바스크립트 방식 
// document.getElementById('login').addEventListener('click', function(){
//     document.querySelector('.black-bg').classList.add('show-modal')
// });
// get 말고 querySelecter도 가능
document.querySelector('#login').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show-modal');
});
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show-modal');
});

// 과제 : 제이쿼리 방식
// $('#login').on('click', function(){
//     $('.black-bg').addClass('show-modal')
// });

// 방법2
// $('.login-btn').on('click', function(){
//     $('.black-bg').show();
// });
// $('.btn').on('click', function(){
//     $('.black-bg').hide();
// });