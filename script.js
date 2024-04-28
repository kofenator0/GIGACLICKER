let cookie = document.querySelector(".cookie")
let scoreHTML = document.querySelector(".score")

let score = 0
let autoClick = 0


cookie.addEventListener("click", function(){
    score = score + 1
    scoreHTML.innerHTML = score

})

if(score >= 100){
    score = score - 100
    scoreHTML.innerHTML = score
    autoClick += 1
}

inner

setInterval(function tick() {
     score = score + autoClick
     scoreHTML.innerHTML = score
}, 1000);







