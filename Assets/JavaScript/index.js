let howBtn = document.querySelector(".buttons a");
let i = document.getElementById("btn-2");
let buttons = Array.from(document.getElementsByClassName("main-btn"));
let overLay = document.querySelector(".overlay");
let signUp = document.querySelector(".signup");
let signUpClose = document.querySelector(".signup span");
let loginBtn = document.getElementById("login-btn");
let loginBox = document.querySelector(".login");
let loginUpClose = document.querySelector(".login span");
let loginClose = document.querySelector(".login a");
let hamburgerIcon = document.querySelector(".ri-menu-fold-line");
let hamburgerMenu = document.querySelector(".hamburger");
let closeHamburg = document.querySelector(".ri-close-fill");
let hamLi = document.querySelectorAll(".hamburger li");
const fullDocumentHeight = document.body.scrollHeight;

overLay.style.height = fullDocumentHeight + "px";

howBtn.addEventListener("mouseenter",()=>{
    i.classList.remove("ri-arrow-right-up-line");
    i.classList.add("ri-arrow-right-line");
})

howBtn.addEventListener("mouseleave",()=>{
    i.classList.add("ri-arrow-right-up-line");
    i.classList.remove("ri-arrow-right-line");
})

for(let button of buttons){
    button.addEventListener("click",()=>{
        overLay.style.opacity = "1";
        overLay.style.zIndex = "999";
        signUp.style.top = "50%";
    })
}

signUpClose.addEventListener("click",()=>{
    overLay.style.opacity = "0";
    overLay.style.zIndex = "-2";
    signUp.style.top = "-50%";
})

loginBtn.addEventListener("click",()=>{
    loginBox.style.top = "50%";
})

loginUpClose.addEventListener("click",()=>{
    loginBox.style.top = "-100%";
})

loginClose.addEventListener("click",()=>{
    loginBox.style.top = "-100%";
})

hamburgerIcon.addEventListener("click",()=>{
    hamburgerMenu.style.right = "0%";
})

closeHamburg.addEventListener("click",()=>{
    hamburgerMenu.style.right = "-150%";
})

for(let li of hamLi){
    li.addEventListener("click", ()=>{
        hamburgerMenu.style.right = "-150%";
    })
}