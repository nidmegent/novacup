// =========================
// LOADING SCREEN
// =========================

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

let progress = 0;

const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.transition = "1s";

            setTimeout(() => {

                loader.style.display = "none";
                document.body.classList.remove("booting");

            },1000);

        },500);

    }

},25);


// =========================
// COUNTDOWN
// =========================

// ↓ 大会日時を変更して使う
const tournamentDate = new Date(
    "2026-08-15T19:00:00"
).getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance =
    tournamentDate - now;

    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );

    document.getElementById("days").textContent =
    String(days).padStart(2,"0");

    document.getElementById("hours").textContent =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent =
    String(seconds).padStart(2,"0");

    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".countdown")
        .innerHTML = `
        <h2 style="color:#ff3b5c;">
        TOURNAMENT STARTED
        </h2>
        `;

    }

},1000);


// =========================
// HEADER EFFECT
// =========================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,.9)";

        header.style.boxShadow =
        "0 0 20px rgba(255,59,92,.3)";

    }else{

        header.style.background =
        "rgba(0,0,0,.65)";

        header.style.boxShadow =
        "none";

    }

});


// =========================
// FADE IN ANIMATION
// =========================

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
".section,.countdown-section,.cta"
)
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// SMOOTH BUTTON GLOW
// =========================

setInterval(()=>{

    document
    .querySelectorAll(".btn-red")
    .forEach(btn=>{

        btn.style.boxShadow =
        `0 0 ${
            10 +
            Math.random()*20
        }px #ff3b5c`;

    });

},1000);


// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    let offset =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.4 + "px";

});


// =========================
// LOGO FLOAT RANDOM
// =========================

const logo =
document.querySelector(".hero-logo");

let angle = 0;

setInterval(()=>{

    angle += 0.02;

    logo.style.transform =
    `translateY(${
        Math.sin(angle)*10
    }px)`;

},20);


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"%cNovaCup Tournament System Loaded",
"color:#ff3b5c;font-size:20px;font-weight:bold;"
);

console.log(
"%cGood Luck Have Fun!",
"color:white;font-size:16px;"
);
