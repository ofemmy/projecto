import { Project } from "./Project";
import { SelectChoice } from "./SelectChoice.enum";
import { AppController } from "./AppController";

export const EventsController = {
  sortHandler(e: Event) {
    let choice = (<HTMLSelectElement>e.target).value;
    switch (choice) {
      case SelectChoice.completionStatus:
        let soretedByCompletion = [...AppController.projectList].sort(
          (p1, p2) => p2.percent - p1.percent
        );
        AppController.mountCards({
          projects: soretedByCompletion,
          refresh: true,
        });
        break;
      case SelectChoice.creationDate:
        //sorts by most recently created
        let sortedByCreationDate = [...AppController.projectList].sort(
          (p1, p2) => {
            if (p1.startDate.isBefore(p2.startDate)) {
              return 1;
            } else if (p1.startDate.isAfter(p2.startDate)) {
              return -1;
            } else {
              return 0;
            }
          }
        );
        AppController.mountCards({
          projects: sortedByCreationDate,
          refresh: true,
        });
        break;
      case SelectChoice.deadlineDate:
        //sorts by closest deadline
        let sortedByDeadline = [...AppController.projectList].sort((p1, p2) => {
          if (p1.endDate.isAfter(p2.endDate)) {
            return 1;
          } else if (p1.endDate.isBefore(p2.endDate)) {
            return -1;
          } else {
            return 0;
          }
        });
        AppController.mountCards({ projects: sortedByDeadline, refresh: true });
        break;
      case SelectChoice.remainingDays:
        console.log("Sort according to remainingdays");
        break;
      default:
        break;
    }
  },
};
