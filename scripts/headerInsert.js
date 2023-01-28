const addHTML = () => {
    alert("loaded");
    $.get("header.html", function(data) {
        $("#header").html(data);
    });
}
window.onload = () => {
    addHTML();
}