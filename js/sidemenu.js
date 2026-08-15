function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

function closeMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) {
    menu.classList.remove("open");
  }
}
