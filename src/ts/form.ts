import { Calender } from "./Calendar";
import "../sass/addForm.scss";
let startDateInput = document.querySelector("#startDate") as HTMLElement;
let endDateInput = document.querySelector("#endDate") as HTMLElement;
let startHost = document.querySelector(".myCal1") as HTMLElement;
let endHost = document.querySelector(".myCal2") as HTMLElement;
new Calender({
  hookEl: startDateInput,
  eventType: "click",
  hostEl: startHost,
});
new Calender({ hookEl: endDateInput, eventType: "click", hostEl: endHost });

let addTaskBtn = document.querySelector(".addTask") as HTMLButtonElement;
let taskDiv = document.querySelector(".taskDiv") as HTMLElement;
addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let taskInput = document.createElement("input");
  taskInput.classList.add("form-control", "mt-2");
  taskInput.placeholder = "Add New Task";
  taskDiv.appendChild(taskInput);
});

//HANDLE FORM SUBMISSION//
let submitBtn = document.querySelector(
  'button[type="submit"]'
) as HTMLButtonElement;
submitBtn.addEventListener("click", formSubmitHandler);
function formSubmitHandler(e: Event) {
  e.preventDefault();
  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const descriptionEl = document.querySelector(
    "#description"
  ) as HTMLTextAreaElement;
  const startDateEl = document.querySelector("#startDate") as HTMLInputElement;
  const endDateEl = document.querySelector("#endDate") as HTMLInputElement;
  const taskDiv = document.querySelector(".taskDiv") as HTMLElement;
  const tasks = Array.from(taskDiv.children)
    .filter((child) => child.nodeName == "INPUT")
    .map((taskInp) => (<HTMLInputElement>taskInp).value);

  const project = {
    title: titleEl.value,
    description: descriptionEl.value,
    startDate: startDateEl.getAttribute("data-dateValue"),
    endDate: endDateEl.getAttribute("data-dateValue"),
    tasks,
  };

  console.log(project);
}
