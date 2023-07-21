//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);

hideall();

function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) {
    // Get the selected page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
  
    // Check if the page is already visible
    if (onepage.style.display === "block") {
      // If the page is visible, hide it
      onepage.style.display = "none";
    } else {
      // If the page is hidden, hide all other pages and show this page
      hideall(); // Hide all other pages
      onepage.style.display = "block"; // Show the selected page
    }
  }
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
  });
  page2btn.addEventListener("click", function () {
    show(2);
  });
  page3btn.addEventListener("click", function () {
    show(3);
  });


/*for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() { /*open and close menu*/
    menuItemsList.classList.toggle("menuShow");
    // if (menuItemsList.style.display == "block")
    //     menuItemsList.style.display = "none";
    // else menuItemsList.style.display = "block";
}//can optimize using toggle class with css transitions