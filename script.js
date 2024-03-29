const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
});

const addEventOnElements = function(elements, eventtype, callback){
    for(let i=0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eventtype, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navtoggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
} 

addEventOnElements(navtoggler, "click", toggleNav);


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});















