const userImage = document.querySelector("#user-image");
const userSection = document.querySelector("#user");

userImage.addEventListener("click", function() {
  userSection.classList.toggle("visible");
});

document.addEventListener("click", function(event) {
    if (!userSection.contains(event.target) && !userImage.contains(event.target)) {
      userSection.classList.remove("visible");
    }
  });