const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("click", e => {
      openImg(e);  
    })
    img.addEventListener("keydown", e => {
        if(e.keyCode === 13){
            openImg(e);
        }
    })
})






function openImg(e){
    console.log(e.target)
        let image = e.target;
        let src = image.getAttribute("src");
        console.log(src)
        window.open(src)
}