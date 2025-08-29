// handle dark/light mode toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // update button text depending on current mode
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌞 Light";
  } else {
    toggleBtn.textContent = "🌙 Dark";
  }
});
