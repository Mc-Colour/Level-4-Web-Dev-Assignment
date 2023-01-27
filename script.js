

const addHTML = () => {
//     document.querySelector('#header').innerHTML = `
//     <p>hi</p>
// `;
    $.get("/pages/header.html", function(data) {
        $("#header").html(data);
        alert("Ok. Load.");
    });
}




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

window.onload = () => {
    addHTML();
}