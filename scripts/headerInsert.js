const addHTML = () => {
    $.get("../scripts/header.html", function(data) {
        $("#header").html(data);
    });
}
window.onload = () => {
    addHTML();
}