var app = {
  init: () => {

    // Ciblage des éléments du DOM
    app.projectElts = document.getElementById("container-projects");
    app.overlay1 = document.getElementById("overlay-1-1");
    app.overlay2 = document.getElementById("overlay-2-2");
    app.overlay3 = document.getElementById("overlay-3-3");
    app.projects = document.getElementsByClassName('projects');
    app.responsiveBtn = document.getElementById('responsive');
    app.responsiveBtnStyle = document.getElementById('fa-style');
    app.header__navbar = document.querySelector('.header__navbar')
    app.navBar = document.getElementById("navbar");
    app.messageLabel = document.getElementById("messageLabel");
    app.headerDiv = document.getElementById("header");
    app.loadingScreen = document.getElementById("loading")


    // Variables globales
    app.message = "Développeur Full-Stack JS";
    app.msgCount = 0;
    app.timer1;

    // Initialisation des functions
    app.handlePopUpEffect();
    app.mainTitleAnimation();
    
    // Gestion des Listeners
    app.responsiveBtn.addEventListener('click',app.handleClickEffect)
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
  let target = document.querySelectorAll("[class*=reveal-").forEach(function (res) {
    observer.observe(res)
  })

  try {
    observer.observe(target);
  } catch (error) {
    (error)
    };

  },

  handleClickEffect: function () {

    if (app.navBar.className === "navbar__elts-box") {
      app.navBar.className += " responsive";
      app.responsiveBtnStyle.className = 'fa fa-times'
      app.header__navbar.className += " clicked"
    } else {
      app.navBar.className = "navbar__elts-box";
      app.responsiveBtnStyle.className = 'fa fa-bars';
      app.header__navbar.className = "header__navbar";
    } 
  },

  textFunc: function () {

    app.messageLabel.innerHTML = app.message.substring(0, app.msgCount);
    if (app.msgCount == app.message.length) {
      clearInterval(app.timer1);   
    } else {
        app.msgCount++;
    }
  },

  mainTitleAnimation: function () {
  
  app.timer1 = setInterval("app.textFunc()", 100);   
  },
};

// Gestion de l'affichage du DOM au loading de la page 

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    app.loadingScreen.classList.remove('hiden');
    app.headerDiv.classList.add('hiden');
  } else {
    app.loadingScreen.classList.add('hiden');
    app.headerDiv.classList.remove('hiden');
    app.init();
  }
};


