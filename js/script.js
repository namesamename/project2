// mobile
$('.mob-search').click(function(){
    $('.left-side').addClass('on');
});

$('.left-side .close-btn').click(function(){
    $('.left-side').removeClass('on');
});

$('.mob-menu').click(function(){
    $('body').css({overflow: 'hidden', position: 'fixed', width: '100%', height: '100%'});
    $('.right-side').show().animate({right: 0}, 300);
    $('.right-bg').addClass('on');
});

$('.right-side .close-btn').click(function(){
    $('body').css({overflow: 'auto', position: 'static', width: 'auto', height: 'auto'});
    $('.right-side').hide().animate({right: -320}, 300);
    $('.right-bg').removeClass('on');
});

$('.mob-nav>li').each(function(){
    $(this).click(function(){
        $(this).find('>a').addClass('on');
        $(this).siblings('li').find('>a').removeClass('on');
        $(this).find('>ul').show();
        $(this).siblings('li').find('>ul').hide();
    });
});

let on=$('.mob-nav>li>a').filter('.on');
if(on==true){
    on.parent().find('>ul').show();
}else{
    on.parent().siblings('li').find('>ul').hide();
};

/* let none=$('.mob-nav>li>a').filter('.none');
if(none==true){
    none.removeClass('on');
}; */

$('.mob-nav>li>ul>li>ul').hide();
$('.mob-nav>li>ul>li').click(function(e){
    // e.priventDefault();
    $('.mob-nav>li>ul>li>a').removeClass('on');
    $(this).find('>a').addClass('on');
    $('.mob-nav>li>ul>li>ul').stop().slideUp();
    $(this).find('>ul').stop().slideDown();
});



//nav
let nav=$('.h-b-nav>ul>li');
nav.each(function(){
    $(this).hover(function(){
        $(this).find('>a').addClass('on');
        $(this).find('.flip').addClass('visible');
    },function(){
        $(this).find('>a').removeClass('on');
        $(this).find('.flip').removeClass('visible');
    });
});



// banner slick
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



// info tab
$('.info-wrap').each(function(){
    let infoWrap=$(this);
    let infoBtn=infoWrap.find('.info-btn');
    let infoBtnA=infoBtn.find('>a');
    let infoTab=infoWrap.find('.info-tab');
    let lastBtn;
    let lastTab;
    let b=true;

    lastBtn=infoBtn.filter('.on');
    lastTab=$(infoBtnA.attr('href'));

    infoTab.hide();

    infoBtn.click(function(e){
        e.preventDefault();
        let currentBtn=$(this);
        let currentBtnA=$(this).find('>a');
        let currentTab=$(currentBtnA.attr('href'));

        lastBtn.removeClass('on');
        currentBtn.addClass('on');

        lastTab.hide();
        currentTab.show();
        lastBtn=currentBtn;
        lastTab=currentTab;
    });
});

$('.img-tab ul li').each(function(){
    function imgTabClick(e){
        e.preventDefault();
        $(this).addClass('on').siblings('li').removeClass('on');
    };
    $(this).click(imgTabClick);
});

/* $('.info-btn').each(function(){
    let b=true;
    $(this).click(function(){
        if(b==true){
            $(this).addClass('on').siblings('.info-btn').removeClass('on');
            b=false;
        }else{
            $(this).removeClass('on');
            b=true;
        };
    });
}); */



// board tab
let tabMenu=$('.board-news');
function tabsMenu(e){
    e.preventDefault();
    $(this).parent('.tab').addClass('on').siblings('.tab').removeClass('on');
}
tabMenu.find('.tab>a').click(tabsMenu);



// news slick
$('.news-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll : 2,
    arrows : true,
    dots : false,
    draggable : true,
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



// link popup
$('.link-list-t>li').each(function(){
    $(this).click(function(){
        $(this).find('.link-trg').show();
    });
});

/* $('.trg-close-btn').click(function(){
    $('.link-trg').hide();
}); */





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