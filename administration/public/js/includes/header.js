const userImage = document.querySelector("#header__img");
const userSection = document.querySelector("#header__hidden");
const menu = document.querySelector('#header__menu');
const menuDeploy = document.querySelector('#header__user');
const cancelBtn = document.querySelector('#header__cancel');
const contador = document.querySelector('#header__counter');


//opciones para menu en mobile
menu.addEventListener('click', function() {
  menuDeploy.classList.toggle('header__menu--active');
})

cancelBtn.addEventListener('click', function () {
  menuDeploy.classList.remove('header__menu--active');
})

document.addEventListener("click", function(event) {
  if (!menuDeploy.contains(event.target) && !menu.contains(event.target) && !cancelBtn.contains(event.target)) {
    menuDeploy.classList.remove('header__menu--active');
  }
});


//opciones para menu en tablet en adelante
if (window.innerWidth >= 768) {
  userImage.addEventListener("click", function() {
    userSection.style.display="flex";
  });
  
  document.addEventListener("click", function(event) {
      if (!userSection.contains(event.target) && !userImage.contains(event.target)) {
        userSection.style.display="none";
      }
  }); 
}

//estilos para el contador del carrito
console.log(contador.textContent)
function updateCounter() {
  if (Number(contador.textContent) > 0) {
    contador.style.display="block"
  } else {
    contador.style.display="none"
  }
}

document.addEventListener("DOMContentLoaded", updateCounter);