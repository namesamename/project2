$('.banner-slide').slick({
    infinite: true, // 무한여부
    slidesToShow: 1, // 보여질 슬라이드 갯수
    arrows : true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'), // 화살표 여부
    dots : false, // 페이지네이션 여부
    autoplay : true,	// 자동 스크롤 여부
    autoplaySpeed : 5000, 	// 자동 스크롤 시 넘어가는데 걸리는 시간
    pauseOnHover : true,	// 마우스 호버하면 슬라이더 멈추는 설정
    vertical : false,	// 세로 방향 슬라이드 옵션
    draggable : true, 	// 드래그 가능 여부
/*     responsive: [ // 반응형 웹 구현 옵션
    {  
      breakpoint: 1200, // 화면 사이즈 1200px
      settings: {width: '100%', paddingLeft: 200},
      slidesToShow:1 
    }, { 
    breakpoint: 768, // 화면 사이즈 768px
    settings: {	
      slidesToShow:2 
      }
    }
    ] */
});

$('.banner-side li').click(function() {
    var slideNo = $(this).attr('index');
    $('.banner-slide').slick('slickGoTo', slideNo);
});

let pause=$('.stopPlay')
let a=true;
pause.click(function(){
    if(a==true){
        $('.banner-slide').slick('slickPause');
        a=false;
    }else{
        $('.banner-slide').slick('slickPlay');
        a=true;
    }
});

$('.banner-slide').on('afterChange', function(event, slick, currentSlide){
    $('.number').text((currentSlide+1)+'/'+slick.slideCount);
});


// news tab
let tabMenu=$('.board-news');
function tabsMenu(e){
    e.preventDefault();
    $(this).parent('.tab').addClass('on').siblings('.tab').removeClass('on');
}
tabMenu.find('.tab>a').click(tabsMenu);









// banner slide
/* let banner=$('.banner-slide ul li');
let prev=$('.prev');
let next=$('.next');
let pause=$('.stopPlay')
let current=0;
let timer;
let p=$('.number p');

numberSlide();
function numberSlide(){
    timer=setInterval(function(){
    let prevSlide=banner.eq(current);
    let numP=p.eq(current);
    current++;
    leftMove(prevSlide, 0, '-100%');
    numP.removeClass('on');
    if(current==banner.size()) current=0;
    
    let nextSlide=banner.eq(current);
    let numPn=p.eq(current);
    leftMove(nextSlide, '100%', 0);
    numPn.addClass('on');
    },5000);
}

function leftMove(tg, start, end){
    tg.css('left',start).stop().animate({left: end},500);
}; */


// banner btn
/* prev.click(function(){
    let prevSlide=banner.eq(current);
    let numP=p.eq(current);
    current--;
    leftMove(prevSlide, 0, '100%');
    numP.removeClass('on');
    if(current==-banner.size()) current=0;
    
    let nextSlide=banner.eq(current);
    let numPn=p.eq(current);
    leftMove(nextSlide, '-100%', 0);
    numPn.addClass('on');
});

let a=true;
pause.click(function(){
    if(a==true){
        clearInterval(timer);
        a=false;
    }else{
        numberSlide();
        a=true;
    }
});

next.click(function(){
    let prevSlide=banner.eq(current);
    let numP=p.eq(current);
    current++;
    leftMove(prevSlide, 0, '-100%');
    numP.removeClass('on');
    if(current==banner.size()) current=0;
    
    let nextSlide=banner.eq(current);
    let numPn=p.eq(current);
    leftMove(nextSlide, '100%', 0);
    numPn.addClass('on');
}); */