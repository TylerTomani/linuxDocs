
const btnProb2 = document.getElementById("prob2Btn");
const btnProb3 = document.getElementById("prob3Btn");

const animateProb2 = document.getElementById("animateProb2")
const animateProb3 = document.getElementById("animateProb3")

btnProb2.addEventListener("click",() => {
    animateProb2.classList.add("animate")
})

const a = document.getElementById("a");

a.addEventListener("click", (e) =>{
    e.target.classList.add("animate");
    console.log(e.target)
    
})