const panelData = [
  {
    title: "လက်ဖက်သုတ် good",
    title_en: "La-Phat Salad",
    description:
      "the fermented tea leaves were at the center, surrounded bycrackling-crisp fried garlic chips, crunchy dried lentils andtoasted peanuts, savory dried shrimp, nutty sesame seeds,chopped green chilies, fresh tomatoes, and ginger. With itsperfect balance of bright, tart lime juice and deep, earthy,salty fish sauce, it was, without question, the favorite saladin my life.",
    img1: "./img/leaf-3.jpg",
    img2: "./img/leaf-2.jpg",
    img3: "./img/leaf-1.jpg",
  },

  {
    title: "အကြော်စုံ",
    title_en: "Vegetable & Salad Fried",
    description:
      "the fermented tea leaves were at the center, surrounded bycrackling-crisp fried garlic chips, crunchy dried lentils andtoasted peanuts, savory dried shrimp, nutty sesame seeds,chopped green chilies, fresh tomatoes, and ginger. With itsperfect balance of bright, tart lime juice and deep, earthy,salty fish sauce, it was, without question, the favorite saladin my life.",
    img1: "./img/snack-3.jpg",
    img2: "./img/snack-2.jpg",
    img3: "./img/snack-1.jpg",
  },
  {
    title: "လက်ဖက်သုတ်",
    title_en: "La-Phat Salad",
    description:
      "the fermented tea leaves were at the center, surrounded bycrackling-crisp fried garlic chips, crunchy dried lentils andtoasted peanuts, savory dried shrimp, nutty sesame seeds,chopped green chilies, fresh tomatoes, and ginger. With itsperfect balance of bright, tart lime juice and deep, earthy,salty fish sauce, it was, without question, the favorite saladin my life.",
    img1: "./img/leaf-3.jpg",
    img2: "./img/leaf-2.jpg",
    img3: "./img/leaf-1.jpg",
  },
  {
    title: "အကြော်စုံ",
    title_en: "Vegetable & Salad Fried",
    description:
      "the fermented tea leaves were at the center, surrounded bycrackling-crisp fried garlic chips, crunchy dried lentils andtoasted peanuts, savory dried shrimp, nutty sesame seeds,chopped green chilies, fresh tomatoes, and ginger. With itsperfect balance of bright, tart lime juice and deep, earthy,salty fish sauce, it was, without question, the favorite saladin my life.",
    img1: "./img/snack-3.jpg",
    img2: "./img/snack-2.jpg",
    img3: "./img/snack-1.jpg",
  },
];

const renderPanel = (data, index) => {
  const html = `
   <section class="panel" value=${index}>
              <div class="panel__left">
                <div class="panel__left__img panel__left__img-frame1">
                  <span class="panel__left__img-stick"></span>
                  <img
                     src=${data.img1}
                    alt="myanmar green leaf"
                    class="img panel__left__img-img1"
                  />
                </div>
                <div class="panel__left__img panel__left__img-frame2">
                  <span class="panel__left__img-stick"></span>
                  <img
                     src=${data.img2}
                    alt="myanmar green leaf"
                    class="img panel__left__img-img1"
                  />
                </div>
                <div class="panel__left__img panel__left__img-frame3">
                  <span class="panel__left__img-stick"></span>
                  <img
                    src=${data.img3}
                    alt="myanmar green leaf"
                    class="img panel__left__img-img1"
                  />
                </div>
              </div>
              <div class="panel__right">
                <h4 class="product-title">
                  ${data.title} <br />
                  <span class="product-title-en">(${data.title_en})</span>
                </h4>
                <p class="product-description">
                  ${data.description}
                </p>
              </div>
            </section>`;

  return html;
};

export default (node) => {
  const menu = `
 <div class="header__menu">
            <button class="menu menu-active" value="0">01</button>
            <button class="menu" value="1">02</button>
            <button class="menu" value="2">03</button>
            <button class="menu" value="3">04</button>
          </div>
  `;

  node.insertAdjacentHTML("beforeend", menu);
  const panels = document.createElement("div");
  panels.className = "header__panel";

  panelData.forEach((val, index) => {
    const panel = renderPanel(val, index);
    panels.insertAdjacentHTML("beforeend", panel);
  });

  node.appendChild(panels);
};
