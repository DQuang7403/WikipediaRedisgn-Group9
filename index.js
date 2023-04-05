const mobileNav = document.getElementsByClassName("mobileNav")[0];
const humbergerMenu = document.getElementsByClassName("humbergerMenu")[0];
humbergerMenu.addEventListener("click", () =>{
  mobileNav.classList.toggle("active");
})
const userBtn = document.getElementsByClassName("userIcon");
for(let i = 0; i < userBtn.length; i++){
  userBtn[i].addEventListener('click',()=>{
  const content = document.getElementsByClassName("userInformations")[i];
  if(content.style.display == 'none'){
    content.style.display = 'flex';
  }else{
    content.style.display = "none"
  }
  
  })
}