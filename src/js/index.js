import { renderPanelContainer } from "./panel";

const tabMenu = document.querySelector(".container .header__menu");
const tabMenus = document.querySelectorAll(".container .header__menu button");

function showPanel(panelIndex) {
  tabMenus.forEach(function (node) {
    node.className = "";
    node.className = "menu";
  });

  tabMenus[panelIndex].className = "menu menu-active";

  const tabPanels = document.querySelectorAll(
    ".container .header__panel section"
  );

  tabPanels.forEach(function (node) {
    node.className = "";
    node.className = "panel";
  });

  tabPanels[panelIndex].className = "panel panel-active";
  panelPattern(tabPanels, panelIndex);
}

function panelPattern(tabPanels, panelIndex) {
  if (panelIndex == 0) {
    tabPanels[0].style.transform = "translateX(0%)";
    tabPanels[1].style.transform = "translateX(0%)";
    tabPanels[2].style.transform = "translateX(0%)";
    tabPanels[3].style.transform = "translateX(0%)";
  } else if (panelIndex == 1) {
    tabPanels[0].style.transform = "translateX(-100%)";
    tabPanels[1].style.transform = "translateX(-100%)";
    tabPanels[2].style.transform = "translateX(-100%)";
    tabPanels[3].style.transform = "translateX(-100%)";
  } else if (panelIndex == 2) {
    tabPanels[0].style.transform = "translateX(-200%)";
    tabPanels[1].style.transform = "translateX(-200%)";
    tabPanels[2].style.transform = "translateX(-200%)";
    tabPanels[3].style.transform = "translateX(-200%)";
  } else if (panelIndex == 3) {
    tabPanels[0].style.transform = "translateX(-300%)";
    tabPanels[1].style.transform = "translateX(-300%)";
    tabPanels[2].style.transform = "translateX(-300%)";
    tabPanels[3].style.transform = "translateX(-300%)";
  }
}

const globalInit = () => {
  renderPanelContainer();

  tabMenu.addEventListener("click", (e) => {
    console.log("TARGET", e.target.value);
    showPanel(e.target.value);
  });
  showPanel(0);
};

//INITIALIZE
globalInit();
