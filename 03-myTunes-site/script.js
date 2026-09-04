
const footerText = document.querySelector(".lower p");
const redeemButton = document.querySelector(".gift .secondary");
const currentYear = new Date().getFullYear();
const trialButton = document.querySelector(".primary");
const navLinks = document.querySelectorAll("nav ul a");
const readMoreButton = document.querySelector(".about-music .secondary");
const aboutText = document.querySelector(".about-music p");
const topButton = document.createElement("button");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Clicked:", link.textContent);
    });
});

trialButton.addEventListener("click", function () {
    trialButton.textContent = "Trial Started!";
    alert("Welcome to myTunes! Your free trial has started.");
    setTimeout(function () {
        trialButton.textContent = "Start Your Trial Now";
    }, 2000);

});

const shortText = "With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes.";

const fullText = "With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere.";

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