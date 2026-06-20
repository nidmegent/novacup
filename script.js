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

// ↓ 大会日時変更
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

// =========================
// Blue Particle
// =========================

const canvas =
document.getElementById("particlesCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

vx:(Math.random()-0.5)*1.2,
vy:(Math.random()-0.5)*1.2,

size:Math.random()*3+1

});

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.x += p.vx;
p.y += p.vy;

if(p.x<0||p.x>canvas.width)
p.vx*=-1;

if(p.y<0||p.y>canvas.height)
p.vy*=-1;

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(0,180,255,0.8)";

ctx.fill();

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();

// =========================
// HEX GRID
// =========================

const hexCanvas =
document.getElementById("hexCanvas");

const hexCtx =
hexCanvas.getContext("2d");

function resizeHex(){

    hexCanvas.width =
    window.innerWidth;

    hexCanvas.height =
    window.innerHeight;

}

resizeHex();

window.addEventListener(
"resize",
resizeHex
);

function drawHexagon(x,y,size){

    hexCtx.beginPath();

    for(let i=0;i<6;i++){

        const angle =
        (Math.PI/3)*i;

        const px =
        x + size*Math.cos(angle);

        const py =
        y + size*Math.sin(angle);

        if(i===0){
            hexCtx.moveTo(px,py);
        }else{
            hexCtx.lineTo(px,py);
        }

    }

    hexCtx.closePath();

    hexCtx.strokeStyle =
    "rgba(0,180,255,0.15)";

    hexCtx.lineWidth = 1;

    hexCtx.stroke();

}

function renderHexGrid(){

    hexCtx.clearRect(
        0,
        0,
        hexCanvas.width,
        hexCanvas.height
    );

    const size = 40;

    const hexHeight =
    Math.sqrt(3) * size;

    const hexWidth =
    size * 2;

    for(
        let y=0;
        y<hexCanvas.height+hexHeight;
        y+=hexHeight
    ){

        for(
            let x=0;
            x<hexCanvas.width+hexWidth;
            x+=hexWidth*0.75
        ){

            let offset =
            Math.floor(
                x/(hexWidth*0.75)
            ) % 2
            ? hexHeight/2
            : 0;

            drawHexagon(
                x,
                y+offset,
                size
            );

        }

    }

    requestAnimationFrame(
        renderHexGrid
    );

}

renderHexGrid();
