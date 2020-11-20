// CREATION DE LA PARTIE QUI VA AFFICHER L'OVERLAY SECONDAIRE AU MOMENT DU HOVER

const projectElts = document.getElementById("container-projects")

const overlay1 = document.getElementById("overlay-1")
const overlay2 = document.getElementById("overlay-2")
const overlay3 = document.getElementById("overlay-3")

const overlay11 = document.getElementById("overlay-1-1")
const overlay22 = document.getElementById("overlay-2-2")
const overlay33 = document.getElementById("overlay-3-3")


// CREATION DE LA VARIABLE RATION D'AFFICHAGE 

projectElts.addEventListener("mouseover", function (event) {

  let targetElt = event.target

  if(targetElt.id == "overlay-1") {

    overlay11.classList.remove('hiden')
  
  }

  if(targetElt.id == "overlay-2") {

    overlay22.classList.remove('hiden')

  }

  if(targetElt.id == "overlay-3") {

  
    overlay33.classList.remove('hiden')
    
  }
})

function mouseleave1() {

  overlay11.classList.add('hiden')
  
}

function mouseleave2() {

  overlay22.classList.add('hiden')
 
}

function mouseleave3() {

  overlay33.classList.add('hiden')

}

// CREATION DE LA SECTION QUI VA PERMETTRE D'OBERSVER LA SCROLL DE LA PAGE ET DE FAIRE APPARAITRE LES EFFETS 

const ratio = 0.1

const options = {

    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  var callback = function(entries, observer) { 
    entries.forEach(entry => {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible')
              
        }
    })

  }
  var observer = new IntersectionObserver(callback, options);

  var target = document.querySelectorAll("[class*=reveal-").forEach(function (r) {
    observer.observe(r)
  })

  observer.observe(target);


  // RESPONSIVE MENU

  function responsive() {

    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    } 
  }