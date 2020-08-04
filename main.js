let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let closeMenuBar = document.querySelector(".toggle-button__bar");

toggleButton.addEventListener("click", function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
});
