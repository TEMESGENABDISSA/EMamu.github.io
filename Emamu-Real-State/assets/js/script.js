'use strict';
/**
 * navbar toggle in mobile
 */
const /**{node element}*/ $navbar=document.querySelector("[data-navbar]");
const /**{node element}*/ $navToggler=document.querySelector("[data-nav-toggler]");
$navToggler.addEventListener("click",()=>$navbar.classList.toggle("active"));

/**
 * header scroll state
 */
const /**{node element}*/ $header=document.querySelector("[ data-header]");
window.addEventListener("scroll", o  => {
$header.classList[window.scrollY>50? "add":"remove"]("active");
});

/**
 * add to favorite button toggle favorite filachu
 */
const /**{node element}*/ $toggleBtns=document.querySelectorAll("[ data-toggle-btn]");
$toggleBtns.forEach( $toggleBtns =>{
    $toggleBtns.addEventListener("click", ()=> {
        $toggleBtns.classList.toggle("active");
    });
});
