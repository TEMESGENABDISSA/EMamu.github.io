'use strict';

const $navbar=document.querySelector("[data-navbar]");
const  $navToggler=document.querySelector("[data-nav-toggler]");
$navToggler.addEventListener("click",()=>$navbar.classList.toggle("active"));


const  $header=document.querySelector("[ data-header]");
window.addEventListener("scroll", o  => {
$header.classList[window.scrollY>50? "add":"remove"]("active");
});


const $toggleBtns=document.querySelectorAll("[ data-toggle-btn]");
$toggleBtns.forEach( $toggleBtns =>{
    $toggleBtns.addEventListener("click", ()=> {
        $toggleBtns.classList.toggle("active");
    });
});
