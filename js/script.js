// VARIABLES 
// main 
let btn = document.getElementById('adv-close-btn');
let adv = document.getElementById('adv-section');

// cup hoist
let cup = document.getElementById('adv-cupImg');
let confettiImages = document.getElementById('adv-confettiImages');

// teams 
let portlandBg = document.getElementById('adv-teams-bg-portland');
let portlandIcon = document.getElementById('teamsContainer-portlandIcon');
let dallasBg = document.getElementById('adv-teams-bg-dallas');
let dallasIcon = document.getElementById('teamsContainer-dallasIcon');

// text "one game to glory"
let one = document.getElementById('teamsContainer-text-one');
let game = document.getElementById('teamsContainer-text-game');
let toGlory = document.getElementById('teamsContainer-text-toGlory');

// info 
let info = document.getElementById('advInfo');
let infoGradientBg = document.getElementById('adv-infoGradientBg');
let infoBtn = document.getElementById('adv-infoBtn');

// video area 
let videoPlayBtn = document.getElementById('adv-playBtn');
let video = document.getElementById('adv-video');


// divs 
let div__gradientBg = document.getElementById('adv__gradientBg');
let div__cupHoist = document.getElementById('adv__cupHoist');
let div__teams = document.getElementById('adv__teams');



// ************



// BUTTONS FUNCTIONS 
// adv close btn
btn.onclick = function(){
    adv.style.display = "none";
}

// info video open/close btn 
infoBtn.onclick = function(){
    info.classList.toggle("adv-info-active");
    video.pause();
}

// info video play btn 
videoPlayBtn.onclick = function(){
    video.play();
    videoPlayBtn.style.display = "none";
}



// ************



// TIMEOUT FUNCTIONS 
// 1. adv appear 
// 2. cup is going up 
setTimeout( () => {
    adv.style.display = "flex";
    let timer = setInterval(function() {
        cup.style.marginTop = cup.offsetTop - 5 + 'px';

        if (cup.style.marginTop <= (window.innerHeight * 100/5 + 'px')) {
            clearInterval(timer);
        } 
    }, 10);
}, 1000);

// 1. appearing of confetti 
setTimeout( () => {
    let timer = setInterval(function() {
        confettiImages.style.marginTop = confettiImages.offsetTop - 5 + 'px';

        if (confettiImages.offsetTop <=  -1000 ) {
            clearInterval(timer);
        } 

    }, 10);
}, 1700);


// 1. appearing of portland and dallas backgrounds from sides to center 
// 2. display none for cup  
// 3. display none for confetti  
setTimeout( () => {
    portlandBg.style.animation = "1s linear 0s 1 normal teams-portlandBg-animation-appear";
    dallasBg.style.animation = "1s linear 0s 1 normal teams-dallasBg-animation-appear";

    setTimeout( () => {
        portlandBg.style.right = 22 + 'vw';
        dallasBg.style.left = 22 + 'vw';

        cup.style.display = 'none';
        confettiImages.style.display = 'none';
    }, 1000);
}, 3000);


// 1. disappearing of portland and dallas backgrounds from center to sides
// 2. appearing of the text "one dame to glory"
// 3. appearing of portland and dallas icons
setTimeout( () => {
    // div__gradientBg.style.display = "none";
    div__cupHoist.style.display = "none";

    one.style.animation = "0.3s linear 0s 1 normal teams-text-animation-appear";

    setTimeout( () => {
        one.style.opacity = 1;
        game.style.animation = "0.3s linear 0s 1 normal teams-text-animation-appear";
    }, 300);

    setTimeout( () => {
        game.style.opacity = 1;
        toGlory.style.animation = "0.3s linear 0s 1 normal teams-text-animation-appear";
    }, 600);

    setTimeout( () => {
        toGlory.style.opacity = 1;
        
        portlandIcon.style.animation = "0.3s linear 0s 1 normal teams-icons-animation-appear";
        dallasIcon.style.animation = "0.3s linear 0s 1 normal teams-icons-animation-appear";
    }, 900);

    setTimeout( () => {
        portlandIcon.style.opacity = 1;
        portlandIcon.style.height = 378 + 'px';
        portlandIcon.style.width = 378 + 'px';

        dallasIcon.style.opacity = 1;
        dallasIcon.style.height = 378 + 'px';
        dallasIcon.style.width = 378 + 'px';
    }, 1200);
}, 4000);


// 1. appearing of info block
// 2. disappearing of the text "one dame to glory"
// 3. disappearing of portland and dallas icons 
// 4. display none for teams  
setTimeout( () => {
    info.style.opacity = 1;

    one.style.animation = "0.3s linear 0s 1 normal teams-text-animation-disappear";
    game.style.animation = "0.3s linear 0s 1 normal teams-text-animation-disappear";
    toGlory.style.animation = "0.3s linear 0s 1 normal teams-text-animation-disappear";

    portlandBg.style.animation = "1s linear 0s 1 normal teams-portlandBg-animation-disappear";
    dallasBg.style.animation = "1s linear 0s 1 normal teams-dallasBg-animation-disappear";
    infoGradientBg.style.animation = "1.5s linear 0s 1 normal infoGradientBg-animation-disappear";

    portlandIcon.style.animation = "0.5s linear 0s 1 normal teams-portlandIcon-animation-disappear";
    dallasIcon.style.animation = "0.5s linear 0s 1 normal teams-dallasIcon-animation-disappear";

    setTimeout( () => {
        one.style.opacity = 0;
        game.style.opacity = 0;
        toGlory.style.opacity = 0;
    }, 300);

    setTimeout( () => {
        portlandIcon.style.marginRight = 50 + 'vw';
        dallasIcon.style.marginLeft = 50 + 'vw';
    }, 500);

    setTimeout( () => {
        portlandBg.style.right = 100 + 'vw';
        dallasBg.style.left = 100 + 'vw';
    }, 1000);

    setTimeout( () => {
        infoGradientBg.style.opacity = 0;
        div__teams.style.display = "none";
    }, 1500);
}, 5700);