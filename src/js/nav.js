const nav = (node) => {
  const nav = `
<nav class="header__nav">
            <ul class="nav">
              <li class="nav__item nav__item-active" value="0">Home</li>
              <li class="nav__item" value="1">Menu</li>
              <li class="nav__item" value="2">Contact</li>
            </ul>
          </nav>
          `;
  node.insertAdjacentHTML("beforeend", nav);
};

export default nav;
