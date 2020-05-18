const tabMenu = document.querySelector(".container .header__menu");
const tabMenus = document.querySelectorAll(".container .header__menu button");
const tabPanels = document.querySelectorAll(
  ".container .header__panel section"
);

function showPanel(panelIndex) {
  tabMenus.forEach(function (node) {
    node.className = "";
    node.className = "menu";
  });

  tabMenus[panelIndex].className = "menu menu-active";

  tabPanels.forEach(function (node) {
    console.log(node);
    node.style.display = "none";
  });

  tabPanels[panelIndex].style.display = "block";
}

tabMenu.addEventListener("click", (e) => {
  showPanel(e.target.value);
});

//INITIALIZE
showPanel(0);
