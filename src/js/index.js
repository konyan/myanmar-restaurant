console.log("HELLO WORLD");

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
var tabContainer = document.querySelector(".tabContainer .buttonContainer");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    console.log(node);
    node.style.backgroundColor = "";
    node.style.color = "";
  });

  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";

  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });

  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, "#f44336");

tabContainer.addEventListener("click", function (event) {
  let btnClass = event.target.className;
  let id = btnClass.toString().substring(4, 5);
  showPanel(id, "#f44336");
});
