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

$('.mob-nav>li>ul>li>ul').hide();
$('.mob-nav>li>ul>li').click(function(){
    if($(this).find('>a').hasClass('on')){
        $(this).find('>a').removeClass('on');
        $('.mob-nav>li>ul>li>ul').stop().slideUp();
    }else{
        $('.mob-nav>li>ul>li>a').removeClass('on');
        $(this).find('>a').addClass('on');
        $('.mob-nav>li>ul>li>ul').stop().slideUp();
        $(this).find('>ul').stop().slideDown();
    };
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
    slide: 'div',
    infinite: true,
    slidesToShow: 1,
    arrows : true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay : true,
    autoplaySpeed : 5000,
    pauseOnHover : true,
    draggable : true
});

$('.banner-side li').click(function() {
    var slideNo = $(this).attr('data-index');
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

    lastBtn=infoBtn.filter('.on');
    lastTab=$(infoBtnA.attr('href'));

    infoTab.hide();

    infoBtn.click(function(e){
        e.preventDefault();
        let currentBtn=$(this);
        let currentBtnA=$(this).find('>a');
        let currentTab=$(currentBtnA.attr('href'));

        if(currentBtn.hasClass('on')){
            currentBtn.removeClass('on');
            infoTab.hide();
        }else{
            lastBtn.removeClass('on');
            currentBtn.addClass('on');

            lastTab.hide();
            currentTab.show();
            lastBtn=currentBtn;
            lastTab=currentTab;
        };
    });
});

$('.img-tab ul li').each(function(){
    function imgTabClick(e){
        e.preventDefault();
        $(this).addClass('on').siblings('li').removeClass('on');
    };
    $(this).click(imgTabClick);
});



// board tab
let tabMenu=$('.board-news');
function tabsMenu(e){
    e.preventDefault();
    $(this).parent('.tab').addClass('on').siblings('.tab').removeClass('on');
}
tabMenu.find('.tab>a').click(tabsMenu);



// news slick
$('.news-slide').slick({
    slide: 'div',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll : 2,
    arrows : true,
    draggable : true,
    responsive: [
    {breakpoint: 1100, settings: {slidesToShow: 3}},
    {breakpoint: 768, settings: {slidesToShow: 3, arrows : false}},
    {breakpoint: 640, settings: {slidesToShow: 2, arrows : false}},
    {breakpoint: 500, settings: {slidesToShow: 1, arrows : false}}
    ]
});



// news bar
let bar=$('.progress-bar .bar');
$('.news-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let nextC=nextSlide/2;
    let slideC=(slick.slideCount/2)-1;
    let barW=(nextC/slideC)*100;
    // console.log(barW);

    bar.stop().animate({width: barW+'%'},500);
  });


// link popup
$('.link-list>li>a').click(function(){
    $(this).siblings('.link-trg').show();
});

$('.trg-close-btn').click(function(){
    $('.link-trg').hide();
});