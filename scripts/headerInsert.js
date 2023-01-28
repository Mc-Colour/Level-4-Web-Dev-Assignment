const addHTML = () => {
    alert("loaded");
    $.get("header.html", function(data) {
        alert(data);
        $("#header").html(data);
    });
}
window.onload = () => {
    addHTML();
}