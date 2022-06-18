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