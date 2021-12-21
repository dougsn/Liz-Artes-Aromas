

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
CloseMenu = document.getElementById('close-menu');


toggleMenu.addEventListener('click',() => {
  navMenu.classList.toggle('show')
})

navMenu.addEventListener('click',() => {
  navMenu.classList.remove('show')
})

// É necessário colocar o nav como addEventListener, pois quando for clicado nele, feche o menuResponsivo.


/******************************
 ****** Página Principal *******
 ******************************/

ScrollReveal({
  reset: false /*Caso queira que a animação do scroll fique tanto na descida quanto na subida, trocar para true */,
  distance: '60px',
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.home', {
  delay: 100,
  origin: 'left',
})



ScrollReveal().reveal('.title-section, .sub-title', {
  delay: 100,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.caixa', {
  delay: 300,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.container-equipe', {
  delay: 300,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.links', {
  delay: 600,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.final', {
  delay: 400,
  origin: 'left',
  interval: 100
})

/******************************
 ****** Página Detalhes *******
 ******************************/

ScrollReveal().reveal('.descricao', {
  delay: 600,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.container-img', {
  delay: 600,
  origin: 'right',
  interval: 100
})

/******************************
 ****** Slide  *******
 ******************************/

const swiper = new Swiper('.swiper', {

  spaceBetween: 30,
  speed:900,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
});


/*************************************************************************
**************************************************************************
                Transição do Navbar
**************************************************************************
**************************************************************************
*/

window.addEventListener('scroll', function () {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 740)

  /*  Ativar caso queria que tenha uma transição de cor do navbar do Header para o Main */
})

