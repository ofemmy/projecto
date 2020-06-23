import { Project } from "./Project";
import { Status } from "./Status.enum";
import moment from "moment";
export const projects: Array<Project> = [
  {
    title: "Interconnection of Battery source to AC",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur.",
    status: Status.Active,
    percent: 45,
    startDate: moment(new Date(2020, 1, 15)),
    endDate: moment(new Date(2020, 3, 6)),
  },
  {
    title: "Establishment of Trust Fund",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur consectetur adipisicing elit",
    status: Status.Overdue,
    percent: 80,
    startDate: moment(new Date(2020, 6, 15)),
    endDate: moment(new Date(2020, 7, 7)),
  },
  {
    title: "Record New Tutorial",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 75,
    startDate: moment(new Date(2020, 5, 15)),
    endDate: moment(new Date(2020, 8, 2)),
  },
  {
    title: "Setup Youtube Channel",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Active,
    percent: 65,
    startDate: moment(new Date(2020, 6, 17)),
    endDate: moment(new Date(2020, 7, 26)),
  },
  {
    title: "Record New Podcast Episode",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 30,
    startDate: moment(new Date(2020, 4, 25)),
    endDate: moment(new Date(2020, 5, 15)),
  },
  {
    title: "Update FaceTime App",
    description:
      "amet consectetur adipisicing elit. Inventore similique minima voluptatem id suscipit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    status: Status.Completed,
    percent: 60,
    startDate: moment(new Date(2020, 3, 15)),
    endDate: moment(new Date(2020, 10, 6)),
  },
];
