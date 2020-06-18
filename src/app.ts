import { Status } from "./Status.enum";
import {Project} from "./Project";
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
    title: "Setup Youtube Channel",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 20,
  },
  {
    title: "Setup Youtube Channel",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 10,
  },
];
