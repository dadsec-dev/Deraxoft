//MENU TOGGLER
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

//adding eventListeners to the hamburger
hamburger.addEventListener("click", () => {
    //when a user clicks on the hamburger icon, we want to display the menu items
    navUL.classList.toggle("show"); /*we add the .show classlist style to the nav-ul in order to show the list items*/
    hamburger.classList.toggle("hide");/*here we hide the hamburger icon*/

});

/*adding event listener to the close icon*/
close.addEventListener("click", () => {
    navUL.classList.toggle("show");
   hamburger.classList.toggle("hide");
});