// Get the checkbox element
const checkbox = document.getElementById("ham-checkbox");

// Get the menu links element
const menuLinks = document.querySelector(".menu-links");

// Add event listener for checkbox change
checkbox.addEventListener("change", function () {
  if (this.checked) {
    menuLinks.style.display = "flex";
  } else {
    menuLinks.style.display = "none";
  }
});

function toggleMenuLinksDisplay() {
  if (window.innerWidth > 1200) {
    menuLinks.style.display = "flex";
  } else {
    menuLinks.style.display = "none";
    checkbox.checked = false;
  }
}

// Call the function initially
toggleMenuLinksDisplay();

// Add event listener for window resize
window.addEventListener("resize", toggleMenuLinksDisplay);
