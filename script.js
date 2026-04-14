let main = document.querySelector("main");
let thor = document.querySelector(".thor");
let gorr = document.querySelector(".gorr");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");


let state = -1;

setTimeout(function () {
    state = 0;
}, 1000);

let horror = new Audio("horror.mp3");
let thunder = new Audio("thunder.mp3");
let scream = new Audio("scream.mp3");

horror.loop = true;
thunder.loop = true;
scream.loop = true;

main.addEventListener("click", function () {

    if (state == 0) {

        gorr.style.top = "0%";
        horror.play();
        h2.style.opacity = 0;
        setTimeout(function () {
            state = 1;
            h3.style.opacity = 1;
        }, 3000);
    }

    if (state == 1) {

        setTimeout(function () {
            document.body.style.background = "url('https://i.pinimg.com/originals/38/8b/e2/388be24848b1bbb4388a4352f0af1a5c.gif')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";

            horror.muted = true;
            horror.pause();

            h3.style.opacity = 0;
            thunder.play();
        }, 300);
        setTimeout(function () {

            h4.style.opacity = 1;

            thor.style.opacity = 1;

            thor.style.bottom = "200px";
            thor.style.right = "200px";
            body.style.cursor = "none";
            state = 2;
        }, 700);

    }

    if (state == 3) {
        if (state == 3) {
            h4.style.opacity = 0;
            gorr.style.top = "-50%";
            thunder.muted = true;
            thunder.pause();

            scream.play();
            setTimeout(function () {
                scream.muted = true;
                scream.pause();

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

            }, 2000);

            state = 4;
        }
    }

});


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
        console.log("condition matched");
        console.log(state);
        if (state == 2) {
            state = 3;
        }
        // for (let i = 1; i <= 100; i++) {
        //     spot = document.createElement("img");
        //     spot.src = "https://www.freeiconspng.com/uploads/blood-spatter-high-velocity-blunt-spatter-png-20.png";
        //     spot.style.position = "absolute";
        //     spot.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        //     spot.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        //     spot.style.height = Math.floor(Math.random() * 200) + "px";
        //     spot.style.width = Math.floor(Math.random() * 200) + "px";
        //     spot.zIndex = -5;
        //     main.appendChild(spot);
        // }
    }

});


