const addHTML = () => {
    $.get("../pages/header.html", function(data) {
        $("#header").html(data);
    });
}
window.onload = () => {
    addHTML();
}