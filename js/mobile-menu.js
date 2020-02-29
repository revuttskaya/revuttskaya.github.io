var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var close = document.getElementsByClassName("mobile-nav__close")[0];

var onCloseModalActions = function () {
    mobileNav.style.display = "none";
    document.body.style.overflow = 'visible';
};

toggleButton.addEventListener("click", function() {
    mobileNav.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.onclick = onCloseModalActions;

