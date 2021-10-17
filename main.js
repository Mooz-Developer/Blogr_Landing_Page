let illImage = document.querySelector('.second-page .column img'),
laptopImage = document.querySelector('.fourth-page .column img');

if(innerWidth < 800){
    illImage.src = "images/illustration-editor-mobile.svg"
    laptopImage.src = "images/illustration-laptop-mobile.svg"
}

window.onresize = function () {
    if(innerWidth <= 800){
        illImage.src = "images/illustration-editor-mobile.svg"
        laptopImage.src = "images/illustration-laptop-mobile.svg"
    } else {
 
        illImage.src = "images/illustration-editor-desktop.svg"
        laptopImage.src = "images/illustration-laptop-desktop.svg"
    }
}

document.querySelector('.responsive-list').onclick = function () {
    this.classList.toggle('open')
}