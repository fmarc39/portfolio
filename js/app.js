// CREATION DE LA PARTIE QUI VA AFFICHER L'OVERLAY SECONDAIRE AU MOMENT DU HOVER

const init = () => {
  console.log('ok')
}

const projectElts = document.getElementById("container-projects")
const overlay1 = document.getElementById("overlay-1-1")
const overlay2 = document.getElementById("overlay-2-2")
const overlay3 = document.getElementById("overlay-3-3") 

projectElts.addEventListener("mouseover", function (event) {
  let targetElt = event.target

  if(targetElt.id == "overlay-1") {
    overlay1.classList.remove('hiden') 
  }

  if(targetElt.id == "overlay-2") {
    overlay2.classList.remove('hiden')
  }

  if(targetElt.id == "overlay-3") {
    overlay3.classList.remove('hiden')    
  }
})

function mouseleave1() {

  overlay1.classList.add('hiden') 
}

function mouseleave2() {

  overlay2.classList.add('hiden')
}

function mouseleave3() {

  overlay3.classList.add('hiden')
}

// CREATION DE LA SECTION QUI VA PERMETTRE D'OBERSVER LA SCROLL DE LA PAGE ET DE FAIRE APPARAITRE LES EFFETS 

const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

let callback = function(entries, observer) { 
  entries.forEach(entry => {

      if (entry.intersectionRatio > ratio) {
          entry.target.classList.add('reveal-visible')          
      }
  }
)
  }
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelectorAll("[class*=reveal-").forEach(function (r) {
    observer.observe(r)
  })

  try {
    observer.observe(target);
  } catch (error) {
    (error)
  };

  // responsivemenu

  function responsive() {

    let header__navbar = document.querySelector('.header__navbar')
    let navBar = document.getElementById("navbar");
    if (navBar.className === "navbar__elts-box") {
      navBar.className += " responsive";
      header__navbar.className += " clicked"
    } else {
      navBar.className = "navbar__elts-box";
      header__navbar.className = "header__navbar"
    } 
  }
// Animated main title letres 

let message = "Développeur Full-Stack JS";
let msgCount = 0;
let timer1;
let messageLabel = document.getElementById("messageLabel");

function textFunc() {
  messageLabel.innerHTML = message.substring(0, msgCount);
  if (msgCount == message.length) {
    clearInterval(timer1);   
  } else {
      msgCount++;
  }
}
timer1 = setInterval("textFunc()", 100);

window.addEventListener("load", init);