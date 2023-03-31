const mobileNav = document.getElementsByClassName("mobileNav")[0];
const humbergerMenu = document.getElementsByClassName("humbergerMenu")[0];
humbergerMenu.addEventListener("click", () =>{
  mobileNav.classList.toggle("active");
})