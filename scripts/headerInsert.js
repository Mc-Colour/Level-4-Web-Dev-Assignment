const addHTML = () => {
    $.get("header.html", function(data) {
        $("#header").html(data);
    });
}
window.onload = () => {
    addHTML();
}