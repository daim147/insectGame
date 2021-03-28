const screens = document.querySelectorAll(".screen");
const chooseBTns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
let seconds = 0;
let score = 0;
let selected_insect = {};

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

chooseBTns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    timestart();
  });
});

function timestart() {
  setInterval(time, 1000);
}

function time() {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  timeEl.innerHTML = `Time:${minute}:${second}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandom();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener("click", insectCaught);
  gameContainer.appendChild(insect);
}

function getRandom() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  }

function insectCaught() {
  addScore();
  this.classList.add("caught");
  setTimeout(()=>{
      this.remove()
  },2000)
  addInsect();
}

function addInsect() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}
function addScore() {
  score++;
  if (score > 19 && score < 25) {
    messageEl.classList.add("vissible");
  } else {
    messageEl.classList.remove("vissible");
  }

  scoreEl.innerHTML = `Score: ${score}`;
}



// startBtn.addEventListener("click", ()=>{
//     screens[0].classList.add("up")
// })

// chooseBTns.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         const img = btn.querySelector("img")
//         const src = img.getAttribute("src")
//         const alt = img.getAttribute("alt")
//         selected_insect = {src, alt}
//         screens[1].classList.add("up")
//         setTimeout(createInsect, 1000)
//         startGame()

//     })
// })
// function startGame(){
//     setInterval(increaseTime, 1000);
// }
// function increaseTime(){
//     let m = Math.floor(seconds / 60)
//     let s = seconds % 60
//     m = m < 10 ? `0${m}` : m
//     s = s < 10 ? `0${s}` : s

//     timeEl.innerHTML = `Time: ${m}:${s}`

//     seconds++
// }

// function createInsect(){
//     const insect = document.createElement("div")
//     insect.classList.add("insect")
//     const {x, y} = getRandomLocation()
//     insect.style.top = `${y}px`
//     insect.style.left = `${x}px`
//     insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />  `

//     insect.addEventListener("click", cathInsect)
//     gameContainer.appendChild(insect)
// }

// function getRandomLocation(){
//     const width = window.innerWidth
//     const height = window.innerHeight
//     const x = Math.random() * (width-200) + 100
//     const y = Math.random() * (height-200) + 100
//     return {x, y}
// }

// function cathInsect(){
//     increaseScore()
//     this.classList.add("caught")
//     setTimeout(() => {
//         this.remove()
//     }, 2000);

//     addInsect()
// }
// function addInsect(){
//     setTimeout(createInsect, 1000)
//     setTimeout(createInsect, 1500)
// }

// function increaseScore(){
//     score++
//     if(score > 19 && score < 22){
//         messageEl.classList.add("vissible")

//     }
//     setTimeout(() => {
//         messageEl.classList.remove("vissible")

//         },3000);
//     scoreEl.innerHTML = `Score: ${score}`
// }
