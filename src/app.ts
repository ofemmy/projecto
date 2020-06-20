import { UIController } from "./UIController";
import { AppController } from "./AppController";
AppController.registerListeners();
AppController.init();
// projects.forEach((proj) => {
//   let card = UIController.createCard(proj);
//   // UIController.updateProgressBar(card, proj.percent);
//   let mainHook = document.querySelector(".main");
//   if (mainHook) {
//     UIController.mountWidget(card, <HTMLElement>mainHook);
//   }
// });

//test select box eventlistener
// const selectBox = document?.querySelector(".select-css");
// if (selectBox) {
//   selectBox.addEventListener("change", function (e) {
//     if (e) {
//       let filter = (<HTMLInputElement>e.target).value;
//       let sortedProjs = projects.sort(
//         (project1, project2) => project1.percent - project2.percent
//       );
//       console.log(sortedProjs);
//       let mainHook = document.querySelector(".main") as HTMLElement;
//       if (mainHook) {
//         sortedProjs.forEach((proj) => {
//           let card = UIController.createCard(proj);
//           UIController.mountWidget(card, mainHook);
//         });
//       }
//     }
//   });
// }
