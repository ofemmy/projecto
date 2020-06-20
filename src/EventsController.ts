import { SelectChoice } from "./SelectChoice.enum";
import { AppController } from "./AppController";
export const EventsController = {
  sortHandler(e: Event) {
    let choice = (<HTMLSelectElement>e.target).value;
    switch (choice) {
      case SelectChoice.completionStatus:
        const sortedprojects = [...AppController.projectList].sort(
          (p1, p2) => p2.percent - p1.percent
        );
        AppController.mountCards({ projects: sortedprojects, refresh: true });
        break;
      case SelectChoice.creationDate:
        console.log("Sort according to creation date");
        break;
      case SelectChoice.deadlineDate:
        console.log("Sort according to deadline date");
        break;
      case SelectChoice.remainingDays:
        console.log("Sort according to remainingdays");
        break;
      default:
        break;
    }
  },
};
