const prob1 = document.getElementById("problemOne");
const prob1Link = document.getElementById("problemOneLink");
const iframe = document.querySelector("#main-content > iframe")
const mainContent = document.querySelector("#main-content");
const pageExplain = document.querySelector("#main-content > #page-explain");


prob1.addEventListener("click", e => {
    let href = prob1Link.getAttribute("href");
    let toggle = 0;
    toggle += 1;
    console.log(toggle)
    // mainContent.removeChild(pageExplain)
    
    iframe.src = href;

    const iwindow = iframe.contentWindow
    const idoc = iwindow.document
    console.log(iwindow)
    console.log(idoc)
    let prob = idoc.querySelector(".problemH2 > #prob1")
    console.log(prob)
})
