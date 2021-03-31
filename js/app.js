// CREATION DE LA PARTIE QUI VA AFFICHER L'OVERLAY SECONDAIRE AU MOMENT DU HOVER

var app = {
  init: () => {

    // Ciblage du DOM
    app.projectElts = document.getElementById("container-projects");
    app.overlay1 = document.getElementById("overlay-1-1");
    app.overlay2 = document.getElementById("overlay-2-2");
    app.overlay3 = document.getElementById("overlay-3-3");
    app.projects = document.getElementsByClassName('projects');

    // Initialisation des functions
    app.handlePopUpEffect();

    // Gestion des Listeners
    for(const projet of app.projects) {

      projet.addEventListener('mouseover', app.handleMouseOver);
      projet.addEventListener('mouseleave', app.handleMouseLeave);
    }
  },

  handleMouseOver: function (event) {
    switch (event.target.id) {
      case 'overlay-1':
        app.overlay1.classList.remove('hiden');
        break;
      case 'overlay-2':
        app.overlay2.classList.remove('hiden');
        break;
      case 'overlay-3':
        app.overlay3.classList.remove('hiden');
        break;
      default:
        break;
    }
  },

  handleMouseLeave: function (event) {
    console.log(event.target.id)
    switch (event.target.id) {
      case 'project-1':
        app.overlay1.classList.add('hiden');
        break;
      case 'project-2':
        app.overlay2.classList.add('hiden');
        break;
      case 'project-3':
        app.overlay3.classList.add('hiden');
        break;
      default:
        break;
    }
  },

  handlePopUpEffect: function () {

    const ratio = 0.1;
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
  })};
  
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelectorAll("[class*=reveal-").forEach(function (r) {
    observer.observe(r)
  })

  try {
    observer.observe(target);
  } catch (error) {
    (error)
  };
  },


}










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

window.addEventListener("load", app.init);