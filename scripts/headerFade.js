// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('showTopHeader');

    }
    else{
        $('header').removeClass('showTopHeader');
    }    }

})
