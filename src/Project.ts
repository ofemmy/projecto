import { Status } from "./Status.enum";
export class Project {
  title: string;
  description: string;
  status: Status;
  percent: number;

  constructor(
    title: string,
    description: string,
    status: Status,
    percent: number
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.percent = percent;
  }
}
