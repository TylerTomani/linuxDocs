// Very innefficent way of getting problem buttons but I need to move on
const prob1Btn = document.getElementById("problemOneBtn");
const prob1Link = document.getElementById("problemOneLink");
const prob2Btn = document.getElementById("problemTwoBtn");
const prob2Link = document.getElementById("problemTwoLink");
const prob3Btn = document.getElementById("problemThreeLink");
const prob3Link = document.getElementById("problemThreeLink");

//

const iframe = document.querySelector("#main-content > iframe")
const mainContent = document.querySelector("#main-content");
const pageExplain = document.querySelector("#main-content > #page-explain");
const artBtn = document.querySelector("div.article-actions-container > button.btn");
const ch3 = document.getElementById("#ch3")
let count = 0;

// Problem 1
prob1Btn.addEventListener("click", e => {    
    let href = prob1Link.getAttribute("href");
    pageExplain.innerHTML = "";
    iframe.src = href;
    const iwindow = iframe.contentWindow
    const idoc = iwindow.document

    count++;
    // console.log(idoc)
    if(count <= 2){
        setTimeout(function(){
            e.target.click()
            
            let prob = idoc.querySelector("#prob1Btn")
            console.log(ch3)
            
        },40)
        artBtn.innerText = "Installation > Ch3-Install > Create a VM";
    }
    artBtn.innerText = "Installation > Ch3-Install > Create a VM";
    let prob = idoc.querySelector("#prob1Btn");
    prob.focus();


})

prob2Btn.addEventListener("click", e => {    
    let href = prob2Link.getAttribute("href");
    pageExplain.innerHTML = "";
    iframe.src = href;
    const iwindow = iframe.contentWindow
    const idoc = iwindow.document

    count++;
    // console.log(idoc)
    if(count <= 2){
        setTimeout(function(){
            e.target.click()
            
            let prob = idoc.querySelector("#prob2Btn");

            
        },40)
        artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
    }
    artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
    let prob = idoc.querySelector("#prob1Btn");
    prob.focus();

})

prob3Btn.addEventListener("click", e => {    
    let href = prob2Link.getAttribute("href");
    pageExplain.innerHTML = "";
    iframe.src = href;
    const iwindow = iframe.contentWindow
    const idoc = iwindow.document

    count++;
    // console.log(idoc)
    if(count <= 2){
        setTimeout(function(){
            e.target.click()
            
            let prob = idoc.querySelector("#prob2Btn");

            
        },40)
        artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
    }
    artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
    let prob = idoc.querySelector("#prob1Btn");
    prob.focus();


})




const animates = document.querySelectorAll(".animate");

animates.forEach(el => {
    console.log(el.target)
})