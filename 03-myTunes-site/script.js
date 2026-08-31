
const footerText = document.querySelector(".lower p");
const redeemButton = document.querySelector(".gift .secondary");
const currentYear = new Date().getFullYear();
const trialButton = document.querySelector(".primary");
const navLinks = document.querySelectorAll("nav ul a");
const readMoreButton = document.querySelector(".about-music .secondary");
const aboutText = document.querySelector(".about-music p");
const topButton = document.createElement("button");
const shortText = aboutText.textContent;

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Clicked:", link.textContent);
    });
});

trialButton.addEventListener("click", function () {
    trialButton.textContent = "Trial Started!";
    alert("Welcome to myTunes! Your free trial has started.");

});


const fullText =
    shortText +
    " You can enjoy your favorite movies, TV shows and music anytime and anywhere.";

let isExpanded = false;

readMoreButton.addEventListener("click", function () {

    if (isExpanded === false) {
        aboutText.textContent = fullText;
        readMoreButton.textContent = "Read Less";
        isExpanded = true;
    } else {
        aboutText.textContent = shortText;
        readMoreButton.textContent = "Read More";
        isExpanded = false;
    }
});


redeemButton.addEventListener("click", function () {

    const code = prompt("Enter your gift card code:");
    if (code === null) {
        return;
    }
    if (code.trim() === "") {
        alert("Please enter a gift card code.");
    } else {
        alert("Gift card redeemed successfully!");
    }
});


topButton.textContent = "↑";
topButton.classList.add("top-button");
document.body.appendChild(topButton);

// Show button when user scrolls

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll to top

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


footerText.textContent =
    `Copyright © ${currentYear} Md Sarwar Khan`;