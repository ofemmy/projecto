import { Moment } from 'moment';
import { Status } from "./Status.enum";
export class Project {
  title: string;
  description: string;
  status: Status;
  percent: number;
  startDate: Moment;
  endDate: Moment;

  constructor(
    title: string,
    description: string,
    status: Status,
    percent: number,
    startDate: Moment,
    endDate: Moment
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.percent = percent;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
