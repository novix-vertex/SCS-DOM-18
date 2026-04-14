main = document.querySelector("main");
thor = document.querySelector(".thor");
gorr = document.querySelector(".gorr");

let interval = setInterval(function () {
    gorr.style.top = "0%";

}, 1000);

let horror = new Audio("horror.mp3");
let thunder = new Audio("thunder.mp3");
let scream = new Audio("scream.mp3");

horror.muted = true;
thunder.muted = true;
scream.muted = true;

horror.loop = true;
thunder.loop = true;
scream.loop = true;

main.addEventListener("click", function () {
    horror.muted = false;
    horror.play();
});

main.addEventListener("click", function () {
    document.body.style.background = "url('https://i.pinimg.com/originals/38/8b/e2/388be24848b1bbb4388a4352f0af1a5c.gif')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    horror.muted = true;
    horror.pause();
    thunder.muted = false;
    thunder.play();

    setTimeout(function () {
        thor.style.opacity = 1;
        thor.style.bottom = "200px";
        thor.style.right = "200px";
    }, 1000);

});


const controller = new AbortController();


main.addEventListener("mousemove", function (dets) {


    thor.style.transform = "translate(-50%,-50%)";
    thor.style.top = dets.y + "px";
    thor.style.left = dets.x + "px";



    thor_x = dets.x;
    thor_y = dets.y;

    gorr_height = gorr.height;
    gorr_width = gorr.width;
    thor_height = thor.height;
    thor_width = thor.width;

    gorr_xmin = (window.innerWidth / 2) - (gorr_width / 2) + (thor_width / 2);
    gorr_xmax = (window.innerWidth / 2) + (gorr_width / 2) - (thor.width / 2);

    gorr_ymin = 0;
    gorr_ymax = (gorr_height / 2) - (thor_height / 2);

    // console.log("..............................");
    // console.log(`Thor: ${thor_x},${thor_y}`);
    // console.log(`Xrage: ${gorr_xmin},${gorr_xmax}`);
    // console.log(`Yrage: ${gorr_ymin},${gorr_ymax}`);
    // console.log("..............................");


    if ((thor_x >= gorr_xmin && thor_x <= gorr_xmax) && (thor_y >= gorr_ymin && thor_y <= gorr_ymax)) {
        // console.log("condition matched");
        gorr.style.top = "-50%";
        clearInterval(interval);

        for (let i = 1; i <= 100; i++) {
            spot = document.createElement("img");
            spot.src = "https://www.freeiconspng.com/uploads/blood-spatter-high-velocity-blunt-spatter-png-20.png";
            spot.style.position = "absolute";
            spot.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
            spot.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            spot.style.height = Math.floor(Math.random() * 200) + "px";
            spot.style.width = Math.floor(Math.random() * 200) + "px";
            spot.zIndex = -5;
            main.appendChild(spot);
        }
        thor.style.height = "250px";
        thor.style.width = "auto";
        thor.style.top = "100px";

        main.addEventListener("click", function () {
            thunder.muted = true;
            thunder.pause();

            scream.muted = false;
            scream.play();
            setTimeout(function () {
                scream.muted = true;
                scream.pause();
                controller.abort();
            }, 2000);

        });



    }

}, { signal: controller.signal });