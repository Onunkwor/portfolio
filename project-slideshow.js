let project = document.getElementsByClassName("projects");
let slideIndex = 1;

showProject(slideIndex);
function showProject(num) {
  //  go to first, after clicking foward
  if (num > project.length) {
    slideIndex = 1;
  }
  // going backwards
  if (num < 1) {
    slideIndex = project.length;
  }
  // for loop
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  // Change the slideshow
  showProject((slideIndex += num));
}
