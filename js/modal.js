// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var onCloseModalActions = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
};

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
};

// When the user clicks on <span> (x), close the modal
span.onclick = onCloseModalActions;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        onCloseModalActions();
    }
};