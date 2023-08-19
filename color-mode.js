// Define DOM elements
const toggleButton = document.querySelector("#toggle-btn");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Saving the user's preferred mode to local storage
function saveColorMode() {
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
  
}
// Update the toggle button icon based on the current color mode
function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}
// Load the user's preferred color mode from local storage
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}
loadColorMode();

// Toggle color mode
toggleButton.addEventListener("click", function () {
  saveColorMode(); // Call the saveColorMode function here
});
