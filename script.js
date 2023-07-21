

// Target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
// Select all subtopic pages
console.log(allpages);

// Target the DARTS heading
const dartsHeading = document.querySelector("h1");

hideall();

function hideall() {
    // Function to hide all pages
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }

    // Toggle the visibility of the DARTS heading
    toggleDartsHeading();
}

function show(pgno) {
    let onepage = document.querySelector("#page" + pgno);

    // Check if the page is already visible
    if (onepage.style.display === "block") {
        // If the page is visible, hide it with a fade-out effect
        onepage.style.opacity = "0"; // Set opacity to 0 to start the fade-out effect
        setTimeout(() => {
            onepage.style.display = "none"; // Hide the element after the fade-out effect finishes
            // Toggle the visibility of the DARTS heading when hiding the subtopic page
            toggleDartsHeading();
        }, 500); // Adjust the time (milliseconds) based on the CSS transition duration
    } else {
        // If the page is hidden, hide all other pages and show this page with a fade-in effect
        hideall(); // Hide all other pages
        onepage.style.display = "block"; // Show the selected page
        onepage.style.opacity = "0"; // Set opacity to 0 to start the fade-in effect

        // Use setTimeout to give the browser some time to apply the "display: block" before starting the fade-in effect
        setTimeout(() => {
            onepage.style.opacity = "1"; // Set opacity to 1 to gradually fade-in the content
        }, 50); // Adjust the time (milliseconds) based on the CSS transition delay

        // Toggle the visibility of the DARTS heading when showing the subtopic page
        toggleDartsHeading();
    }
}

function toggleDartsHeading() {
    // Function to check the visibility of subtopic pages and toggle the DARTS heading
    const isAnyPageVisible = Array.from(allpages).some((onepage) => {
        return onepage.style.display === "block";
    });

    dartsHeading.style.display = isAnyPageVisible ? "none" : "block";
}

/*Listen for clicks on the buttons, assign anonymous
event handler functions to call the show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

// For hamMenu
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() {
    // Function to open and close the menu
    menuItemsList.classList.toggle("menuShow");
}


//FADE IN FOR CONTENT
document.addEventListener("DOMContentLoaded", function () {
    const windowHeight = window.innerHeight;

    function revealSectionOnScroll(sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        const sectionBottom = sectionElement.getBoundingClientRect().bottom;
        const sectionHeight = sectionBottom - sectionTop;
        const sectionMidpoint = sectionTop + sectionHeight / 2;

        if (sectionMidpoint < windowHeight && sectionMidpoint > 0) {
            sectionElement.classList.add("fade-in");
            sectionElement.classList.remove("fade-out");
        } else {
            sectionElement.classList.remove("fade-in"); // Remove the class if not in the middle
            sectionElement.classList.add("fade-out");
        }
    }

    const sections = document.querySelectorAll(".Evolution, .Standardization, .Television, .Professionalization, .PGR ,.FrontLoad,.BackLoad,.Coated,.PaulLim,.Gerwen");
    sections.forEach((section) => {
        window.addEventListener("scroll", function () {
            revealSectionOnScroll(section);
        });
        revealSectionOnScroll(section);
    });
});

