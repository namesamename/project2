let banner=$('.banner-slide ul li');
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
};

prev.click(function(){
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
});
