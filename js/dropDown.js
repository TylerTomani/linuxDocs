(function(){
    const artBtn = document.querySelector("div.article-actions-container > button.btn");
    const topics = document.querySelectorAll(".sidebar-container > .doc-topic > ul > li > a")
    const mainExplain = document.querySelector("#main-content > #page-explain")
    const iframe = document.querySelector("#main-content > iframe")
    let toggle = false;

    const currentTopic = document.getElementById("currentTopic")
    // // Delete Code Below When Not working on the project
    // addEventListener("load",e => {

    //     let selectPage = currentTopic.nextElementSibling.getAttribute("href")
    //     mainExplain.classList.add("hide")
    //     iframe.src=selectPage


    //     function ShowTopics() {
    //         topics.forEach(topic => {
    //             let parent = topic.parentElement
    //             let subTopic = parent.querySelector("ul")
    //             if(subTopic.classList.contains("hide")){
    //                 subTopic.classList.remove("hide")
    //             }
    //         })
    //     }
    //     ShowTopics()
        
    // })
    // // Delete code Above
    function hideTopics() {
        topics.forEach(topic => {
            let parent = topic.parentElement
            let subTopic = parent.querySelector("ul")
            if(!subTopic.classList.contains("hide")){
                subTopic.classList.add("hide")
            }
        })
    }
    hideTopics()

    topics.forEach(topic => {
        
        topic.addEventListener("click", e => {
            e.preventDefault();
            // I need to get better at tranversing up the DOM tree
            
            let grandParent = e.target.parentElement.parentElement.parentElement
            let gpText = grandParent.querySelector("h2").innerText
            

            let parent = e.target.parentElement
            let subUl = parent.querySelector("ul")

            let topicText = e.target.innerText;

            let subTopicTxt = ""
            let href = ""

            
            if(subUl.classList.contains("hide")){
                hideTopics();
                subUl.classList.remove("hide")
            } else {
                subUl.classList.add("hide")
            }

            artBtn.innerHTML = gpText + " > " + topicText + " > " 

            let subTopics = subUl.querySelectorAll("li")
            subTopics.forEach(subtopic => {
                subtopic.addEventListener("click",e => {
                    e.preventDefault();
                    let pageAnchor = e.target.nextElementSibling
                    href = pageAnchor.getAttribute("href")
                    
                    subTopicTxt = e.target.innerText
                    
                    if(!toggle){
                        mainExplain.classList.add("hide")
                        iframe.src = href
                        artBtn.innerHTML = gpText + " > " + topicText + " > " + subTopicTxt
                        iframe.setAttribute("tabindex","1")
                        iframe.focus()
                    } 

                
                })
            })

        })
    })
})()


// The code below Is terrible, I'm in a hurry to get this done with the knowlege 
// that I have

const artBtn2 = document.querySelector("div.article-actions-container > button.btn");
const sidebarLinks = document.querySelector("#sidebar-links");
let iframeWidth = document.querySelector("#main-content > iframe")
let toggle2 = false
  
artBtn2.addEventListener("click",e =>{
    if(!toggle2){
        sidebarLinks.classList.remove("hide");
    }else {
        sidebarLinks.classList.add("hide");
    }
    toggle2 = !toggle2;
        
})

addEventListener("resize",e =>{
    console.log(innerWidth)
    // console.log(e.target.innerWidth)

    if(innerWidth <= 600){
        artBtn2.classList.add("sm-screen-btn-text")
        
        
        sidebarLinks.classList.add("hide");
        
        artBtn2.addEventListener("click",e =>{
                if(sidebarLinks.classList.contains("hide")){
                    sidebarLinks.classList.remove("hide");
                } else {
                    sidebarLinks.classList.add("hide");
                    console.log(iframeWidth)
                }
                console.log("RESIZEIZE Clicked")
        })

    } else {
        sidebarLinks.classList.remove("hide");
    }
})

addEventListener("DOMContentLoaded", e => {
    
    if(innerWidth < 700){
        console.log("DomLoaded")
    }
    artBtn2.addEventListener("click",e =>{
        if(sidebarLinks.classList.contains("hide")){
            sidebarLinks.classList.remove("hide");
            iframeWidth.style.width = "100%"
        } else {
            sidebarLinks.classList.add("hide");
            console.log(iframeWidth.style)
            iframeWidth.style.width = "100vw"
        }
        console.log("Clicked")
})
    artBtn2.innerHTML = `<span style="font-size: 1.25rem">&darr;</span> ${artBtn.innerText}`
})