let UIHandler = {
  createCard(proj) {
    const cardTemplate = document.querySelector("#card-template");
    const card = document.importNode(cardTemplate.content, true);
    let header = card.querySelector(".card__header");
    header.querySelector("h2").textContent = proj.title;
    header.classList.add(`is-${proj.status}`);
    card.querySelector(".card__content").textContent = proj.description;
    return card;
  },
  updateProgressBar(DOMEl,val) {
    let circle = DOMEl.querySelector(".progressbar__thumb");
    let radius = (circle.attributes.r.value);
    let circ = Math.PI * (radius * 2);
    let pct = ((100 - val) / 100) * circ;
    circle.style.strokeDashoffset = pct.toFixed(2);
    let container = DOMEl.querySelector(".progress-container");
    container.setAttribute("data-pct", val);
  },
  mountWidget(DOMEl, $where) {
    $where.append(DOMEl);
  },
};
