const artBtn = document.querySelector("div.article-actions-container > button.btn");
const topics = document.querySelectorAll(".sidebar-container > .doc-topic > ul > li > a")
const mainExplain = document.querySelector("#main-content > #page-explain")
const iframe = document.querySelector("#main-content > iframe")
let toggle = false;

artBtn.addEventListener("click",e => {
    console.log(e.target);
})

topics.forEach(topic => {
    
    topic.addEventListener("click", e => {
        e.preventDefault();
        // I need to get better at tranversing up the DOM tree
        e.target.setAttribute("tabindex","1")
        e.target.focus()
        let parent = e.target.parentElement.parentElement.parentElement
        let parentText = parent.querySelector("h2").innerText
        let pageLink = e.target.nextElementSibling
        let href = pageLink.getAttribute("href")
        let topicText = e.target.innerText;
        console.log(parentText)
        console.log(topicText)

        if(!toggle){
            mainExplain.classList.add("hide")
            iframe.src = href
            artBtn.innerHTML = parentText + " > " + topicText
            iframe.setAttribute("tabindex","1")
            iframe.focus()
        }
        //  else {
        //     mainExplain.classList.remove("hide")
        //     iframe.src = ""
        // }
        // toggle = !toggle;
        
        

    })
})

