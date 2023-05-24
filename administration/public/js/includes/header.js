const userImage = document.querySelector("#user-image");
const userSection = document.querySelector("#user");
const menu = document.querySelector('#header__menu');
const menuDeploy = document.querySelector('#header__user');
const cancelBtn = document.querySelector('#header__cancel');

// userImage.addEventListener("click", function() {
//   userSection.classList.toggle("visible");
// });

// document.addEventListener("click", function(event) {
//     if (!userSection.contains(event.target) && !userImage.contains(event.target)) {
//       userSection.classList.remove("visible");
//     }
// });

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