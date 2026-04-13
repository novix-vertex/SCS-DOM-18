main = document.querySelector("main");
img = document.querySelector("img");

main.addEventListener("mousemove", function (dets) {
    img.style.transform = "translate(-50%,-50%)";
    img.style.top = dets.y + "px";
    img.style.left = dets.x + "px";
});