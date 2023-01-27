// header scrolling effect
$(window).on('scroll', function(){
    // If the scroll position > 0 the code inside if statement executes
    if($(window).scrollTop()){
        $('header').addClass('hideTopHeader')
        $('header').removeClass('showTopHeader');
    }
    else{
        $('header').addClass('showTopHeader');
        $('header').removeClass('hideTopHeader')
    }

})