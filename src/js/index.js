import menu from "./menu";
import header from "./header";
import nav from "./nav";
import button from "./button";

const showPanel = (panelIndex) => {
  const tabMenus = document.querySelectorAll(".container .header__menu button");

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
};

const panelPattern = (tabPanels, panelIndex) => {
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
};

const globalInit = () => {
  const content = document.querySelector(".wrapper");
  const contentOverlay = document.createElement("div");
  contentOverlay.className = "wrapper-overlay";

  const container = document.createElement("div");
  container.className = "container";

  content.appendChild(contentOverlay);
  contentOverlay.appendChild(container);
  header(container);
  nav(container);
  menu(container);
  button(container);

  const tabMenu = document.querySelector(".container .header__menu");

  tabMenu.addEventListener("click", (e) => {
    showPanel(e.target.value);
  });
  showPanel(0);
};

//INITIALIZE
globalInit();
