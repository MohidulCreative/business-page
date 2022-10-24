function myFunction(x) {
    x.classList.toggle("change");
  } 

// sidebar toggle 
let sidebar_controllar = document.getElementById("bar-controllar");

sidebar_controllar.addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar-menu");
    sidebar.classList.toggle("show");
}) 