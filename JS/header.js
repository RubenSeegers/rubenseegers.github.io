const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 50) {
    // At the top of the page, show the header
    header.classList.remove("hidden");
  } else {
    // Scrolling down or up anywhere below the top, hide the header
    header.classList.add("hidden");
  }
});
