const header = (node) => {
  const header = `
<div class="header__bar">
            <h2 class="header__bar-title">Myanmar Culture Restaurant</h2>
          </div>`;
  node.insertAdjacentHTML("beforeend", header);
};
export default header;
