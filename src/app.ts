import { Status } from "./Status.enum";
import { Project } from "./Project";
import { UIHandler } from "./UIHandler";
let projects: Array<Project> = [
  {
    title: "Interconnection of Battery source to AC",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Active,
    percent: 45,
  },
  {
    title: "Establishment of Trust Fund",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur consectetur adipisicing elit",
    status: Status.Overdue,
    percent: 80,
  },
  {
    title: "Setup Youtube Channel",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 75,
  },
  {
    title: "Setup Youtube Channel",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Active,
    percent: 65,
  },
  {
    title: "Record New Podcast Episode",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 30,
  },
  {
    title: "Update FaceTime App",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 60,
  },
];
projects.forEach((proj) => {
  let card = UIHandler.createCard(proj);
  UIHandler.updateProgressBar(card, proj.percent);
  let mainHook = document.querySelector(".main");
  if (mainHook) {
    UIHandler.mountWidget(card, mainHook);
  }
});
