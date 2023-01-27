const addHTML = () => {
    $.get("header.html", function(data) {
        $("#header").html(data);
        alert("Ok. Load.");
    });
}
window.onload = () => {
    addHTML();
}