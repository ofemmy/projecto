import { Status } from "./Status.enum";
import { Project } from "./Project";
export let UIController = {
  createCard(proj: Project) {
    const cardTemplate = document.querySelector(
      "#card-template"
    ) as HTMLTemplateElement;
    const card = document.importNode(cardTemplate.content, true);
    let header = card.querySelector(".card__header") as HTMLHeadElement;
    header.querySelector("h2")!.textContent = proj.title;
    header.classList.add(`is-${Status[proj.status]}`);
    card.querySelector(".card__content")!.textContent = proj.description;
    this.updateProgressBar(card, proj.percent);
    return card;
  },
  updateProgressBar(DOMEl: DocumentFragment | HTMLElement, val: number) {
    let circle = DOMEl.querySelector(
      ".progressbar__thumb"
    ) as HTMLObjectElement;
    let radius = Number(circle.getAttribute("r")?.valueOf());
    if (radius) {
      let circ: number = Math.PI * (radius * 2);
      let pct = ((100 - val) / 100) * circ;
      circle.style.strokeDashoffset = pct.toFixed(2);
    }
    let container = DOMEl.querySelector(".progress-container");
    container?.setAttribute("data-pct", val.toString());
  },
  mountWidget(
    DOMEl: HTMLElement | DocumentFragment,
    $where: HTMLElement,
    // options: { update: Boolean } = { update: false }
  ) {
    $where.append(DOMEl);
  },
};
