import { Project } from './Project';
import { Status } from "./Status.enum";
export const projects:Array<Project> =[
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
      title: "Record New Tutorial",
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