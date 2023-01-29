const addHTML = () => {
    $.get("../scripts/header.html", function(data) {
        $("#header").html(data);
        alert(data);
    });
}
window.onload = () => {
    addHTML();
}