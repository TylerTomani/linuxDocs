// Very innefficent way of getting problem buttons but I need to move on
const prob1Btn = document.getElementById("problemOneBtn");
const prob1Link = document.getElementById("problemOneLink");

const prob2Btn = document.getElementById("problemTwoBtn");
const prob2Link = document.getElementById("problemTwoLink");

const prob3Btn = document.getElementById("problemThreeBtn");
const prob3Link = document.getElementById("problemThreeLink");

const prob4Btn = document.getElementById("problemFourBtn");
const prob4Link = document.getElementById("problemFourLink");

const prob5Btn = document.getElementById("problemFiveBtn");
const prob5Link = document.getElementById("problemFiveLink");

const prob6Btn = document.getElementById("problemSixBtn");
const prob6Link = document.getElementById("problemSixLink");

const prob7Btn = document.getElementById("problemSevenBtn");
const prob7Link = document.getElementById("problemSevenLink");



//

const iframe = document.querySelector("#main-content > iframe")
const mainContent = document.querySelector("#main-content");
const pageExplain = document.querySelector("#main-content > #page-explain");
const artBtn = document.querySelector("div.article-actions-container > button.btn");
const ch3 = document.getElementById("#ch3")
let count = 0;

// Problem 1
// prob1Btn.addEventListener("click", e => {    
//     let href = prob1Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob1Btn")
//             console.log(ch3)
            
//         },40)
//         artBtn.innerText = "Installation > Ch3-Install > Create a VM";
//     }
//     artBtn.innerText = "Installation > Ch3-Install > Create a VM";
//     let prob = idoc.querySelector("#prob1Btn");
//     prob.focus();


// })

// prob2Btn.addEventListener("click", e => {    
//     let href = prob2Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob2Btn");

            
//         },40)
//         artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
//     }
//     artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
//     let prob = idoc.querySelector("#prob2Btn");
//     prob.focus();

// })

// prob3Btn.addEventListener("click", e => {    
//     let href = prob2Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob2Btn");

            
//         },40)
//         artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
//     }
//     artBtn.innerText = "Installation > Ch3-Install > Install from DVD";
//     let prob = idoc.querySelector("#prob2Btn");
//     prob.focus();


// })

// prob4Btn.addEventListener("click", e => {    
//     let href = prob4Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob4Btn");

            
//         },40)
//         artBtn.innerText = "Installation > Ch4-Configure Linux > Update Sys software";
//     }
//     artBtn.innerText = "Installation > Ch4-Configure Linux > Update Sys software";
//     let prob = idoc.querySelector("#prob4Btn");
//     prob.focus();


// })

// prob5Btn.addEventListener("click", e => {    
//     let href = prob5Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob5Btn");

            
//         },40)
//         artBtn.innerText = "Installation > Ch4-Configure Linux > Configure basic system settings";
//     }
//     artBtn.innerText = "Installation > Ch4-Configure Linux > Configure basic system settings";
//     let prob = idoc.querySelector("#prob5Btn");
//     prob.focus();


// })

// prob6Btn.addEventListener("click", e => {    
//     let href = prob6Link.getAttribute("href");
//     pageExplain.innerHTML = "";
//     iframe.src = href;
//     const iwindow = iframe.contentWindow
//     const idoc = iwindow.document

//     count++;
//     // console.log(idoc)
//     if(count <= 2){
//         setTimeout(function(){
//             e.target.click()
            
//             let prob = idoc.querySelector("#prob6Btn");

            
//         },40)
//         artBtn.innerText = "Installation > Ch4-Using Linux > Installing Software";
//     }
//     artBtn.innerText = "Installation > Ch4-Using Linux > Installing Software";
//     let prob = idoc.querySelector("#prob6Btn");
//     prob.focus();


// })
prob7Btn.addEventListener("click", e => {    
    let href = prob7Link.getAttribute("href");
    pageExplain.innerHTML = "";
    iframe.src = href;
    const iwindow = iframe.contentWindow
    const idoc = iwindow.document

    count++;
    // console.log(idoc)
    if(count <= 2){
        setTimeout(function(){
            e.target.click()
            
            let prob = idoc.querySelector("#prob6Btn");

            
        },40)
        artBtn.innerText = "Installation > Ch4-Using Linux > Installing 3rdParty Software";
    }
    artBtn.innerText = "Installation > Ch4-Using Linux > Installing 3rdParty Software";
    let prob = idoc.querySelector("#prob7Btn");
    prob.focus();


})



