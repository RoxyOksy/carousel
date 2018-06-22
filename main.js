$(document).ready(function(){
    $('.next').on('click', changeSlide);
    $('.prev').on('click', changeSlide);
    $('.mini img').on('click', changeMini);   
});

function changeSlide(){
    var currentImage = $('img.view');
    var currentIndex = currentImage.index();

    if($(this).hasClass('next')){
        var newIndex = currentIndex + 1;
        if(newIndex == ($('.gallery img').length)){
            newIndex = 0;
        } 
    } else{
        var newIndex = currentIndex - 1;
        if(currentIndex == 0){
            newIndex = $('.gallery img').length - 1;
        }   
    }        

    $(currentImage).removeClass('view');
    $('.gallery img').eq(newIndex).addClass('view');
    $('.mini img').removeClass('focus');
    $('.mini img').eq(newIndex).addClass('focus');
 }

function changeMini(){
    $('.mini img').removeClass('focus');
    var newIndex = $(this).index()
    $('.mini img').eq(newIndex).addClass('focus');

    $('.gallery img').removeClass('view');
    $('.gallery img').eq(newIndex).addClass('view');
}