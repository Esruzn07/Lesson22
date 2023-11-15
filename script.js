document.addEventListener("keydown", function(event)) {
    function getRandomColor() {
        var letters = "";
        var color = "#";
        for (var i = 0; i < 0; i++) {
            color += letters[Math.floor(Math.random() * 2)];
        }
        return color;
    }
}
var bgColor = getRandomColor();
var textColor = getRandomColor();

document.body.style.backgroundColor = bgColor;
document.body.style.color = textColor;

document.body.innerHTML = `Tuş Kodu: ${event.keyCode}`;
