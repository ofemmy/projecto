import { projects } from "./projects";
import { UIController } from "./UIController";
import { Project } from "./Project";
import { EventsController } from "./EventsController";
export const AppController = {
  projectList: projects,
  init() {
    //create cards from the projects array and mount them on DOM
    this.mountCards({projects:this.projectList,refresh:false});
    //register all event listeners
  },
  registerListeners() {
    let selectBox = document.querySelector(".select-box") as HTMLSelectElement;
    selectBox.addEventListener("change", EventsController.sortHandler);
  },
  mountCards({
    projects,
    refresh = false,
  }: {
    projects: Project[];
    refresh?: Boolean;
  }) {
    let mainHook = document.querySelector(".main");
    if (refresh && mainHook) {
      mainHook.innerHTML = "";
    }
    projects.forEach((project) => {
      //create Card DOM Element
      let card = UIController.createCard(project);
      if (mainHook) {
        UIController.mountWidget(card, <HTMLElement>mainHook);
      }
    });
  },
};
