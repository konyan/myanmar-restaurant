export default (node) => {
  const button = `
   <div class="action__btn">
            <button class="btn btn-color">ORDER NOW</button>
          </div>`;
  node.insertAdjacentHTML("beforeend", button);
};
