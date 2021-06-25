window.onload = function() {
    
    document.getElementById("navbar-burger").addEventListener('click', () => {
        document.getElementsByTagName("nav")[0].classList.toggle("is-active");
        document.getElementsByClassName("overlay")[0].classList.toggle("is-active");
    })
    document.getElementById("navbar-close").addEventListener('click', () => {
        document.getElementsByTagName("nav")[0].classList.toggle("is-active");
        document.getElementsByClassName("overlay")[0].classList.toggle("is-active");
    })
    document.getElementsByClassName("overlay")[0].addEventListener('click', () => {
        document.getElementsByTagName("nav")[0].classList.toggle("is-active");
        document.getElementsByClassName("overlay")[0].classList.toggle("is-active");
    })
    
};