// On this day animation
const buttons = document.getElementsByClassName("visibleEvent");
const popUpInfo = document.getElementsByClassName("eventInfo");
const arrows = document.getElementsByClassName("arrow");
for(let i = 0; i < buttons.length; i++){
  let popUp = popUpInfo[i];
  let button = buttons[i];
  let arrow = arrows[i];
  button.addEventListener('click',() => {
    button.classList.toggle('open');
    if(popUp.style.maxHeight){
      popUp.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)"
    }else{
      popUp.style.maxHeight = popUp.scrollHeight + 'px';
      arrow.style.transform = "rotate(180deg)";
    }
  })
}
// today article sliding animation
const AshiftBtns = document.querySelectorAll(".shiftBtn");
const AWidth = document.querySelector(".Article");
const Aslider = document.getElementsByClassName("slider")[0];
const defaultWidth = AWidth.clientWidth;
for(let i = 0; i < AshiftBtns.length; i++){
  const shiftBtn = AshiftBtns[i];
  shiftBtn.addEventListener('click', () =>{
    if(shiftBtn.id == "right"){
      Aslider.scrollLeft += defaultWidth ;
    }else{
      Aslider.scrollLeft -= defaultWidth;
    }
  })
}
// did you know animation 
const DYKshiftBtns = document.querySelectorAll(".DYKshiftBtn");
const DYKwidth = document.querySelector(".DYKarticle");
const slider = document.getElementsByClassName("DYKcontainer")[0];
const DYKarticleWidth = DYKwidth.clientWidth;
for(let i = 0; i < DYKshiftBtns.length; i++){
  const DYKBtn = DYKshiftBtns[i];
  DYKBtn.addEventListener('click', ()=>{
    if(DYKBtn.id == 'DYKright'){
      slider.scrollLeft += DYKarticleWidth;
    }else{
      slider.scrollLeft -= DYKarticleWidth;
    }
  })
}

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

