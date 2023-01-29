const addHTML = () => {
    $.get("header.html", function(data) {
        $("#header").html(data);
    });
    alert(data);
}
window.onload = () => {
    addHTML();
}