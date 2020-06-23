import { Moment } from "moment";
import moment from "moment";

export class Calender {
  currentDate: Moment;
  widget: HTMLElement;
  monthsArray: Map<number, string>;
  hostElement: HTMLElement;
  hookElement: HTMLElement;
  triggerEvent: string;
  constructor({
    hookEl,
    hostEl,
    eventType,
  }: {
    hookEl: HTMLElement;
    hostEl: HTMLElement;
    eventType: string;
  }) {
    this.monthsArray = new Map([
      [0, "January"],
      [1, "February"],
      [2, "March"],
      [3, "April"],
      [4, "May"],
      [5, "June"],
      [6, "July"],
      [7, "August"],
      [8, "September"],
      [9, "October"],
      [10, "November"],
      [11, "December"],
    ]);
    this.hostElement = hostEl;
    this.hookElement = hookEl;
    this.triggerEvent = eventType;
    this.currentDate = moment(Date.now());
    this.createWidget(this.hostElement);
    this.widget = this.hostElement;
    this.populateDays();
    this.displayDate();
    this.setupListeners();
  }
  createWidget(parent: HTMLElement) {
    let calMonth = document.createElement("div");
    calMonth.className = "calMonth";
    calMonth.innerHTML = `
    <div class="arrows prev-mth">
    <i class="fas fa-caret-left"></i>
    </div>
    <div class="mth"></div>
    <div class="arrows next-mth">
    <i class="fas fa-caret-right"></i>
    </div> 
    `;
    let dateDisplay = document.createElement("div");
    dateDisplay.className = "date-display";
    let daysDiv = document.createElement("div");
    daysDiv.className = "days";
    // let buttonDiv = document.createElement("div");
    let btn = document.createElement("Button");
    btn.innerText = "SET DATE";
    btn.id = "setDate";
    btn.classList.add("btn", "btn-light", "btn-block");

    parent.appendChild(calMonth);
    parent.appendChild(dateDisplay);
    parent.appendChild(daysDiv);
    parent.appendChild(btn);
  }
  goToNextMonth() {
    this.currentDate.add(1, "M");
    this.populateDays();
    this.widget.querySelector(".mth")!.textContent = `${this.monthsArray.get(
      this.currentDate.get("month")
    )}, ${this.currentDate.get("year")}`;
  }
  goToPrevMonth() {
    this.currentDate.subtract(1, "M");
    this.populateDays();
    this.widget.querySelector(".mth")!.textContent = `${this.monthsArray.get(
      this.currentDate.get("month")
    )}, ${this.currentDate.get("year")}`;
  }
  populateDays() {
    let days_element = this.widget.querySelector(".days") as HTMLDivElement;
    days_element.innerHTML = "";
    let amount_days = this.currentDate.daysInMonth();

    for (let i = 0; i < amount_days; i++) {
      const day_element = document.createElement("div");
      day_element.classList.add("day");
      day_element.textContent = `${i + 1}`;

      day_element.addEventListener("click", (e) => {
        this.currentDate.date(Number((<HTMLDivElement>e.target).textContent));
        this.widget.querySelector(
          ".date-display"
        )!.textContent = this.currentDate.format("Do MMM YYYY");
      });

      days_element.appendChild(day_element);
    }
  }
  displayDate() {
    this.widget.querySelector(".mth")!.textContent = `${this.monthsArray.get(
      this.currentDate.get("month")
    )}, ${this.currentDate.get("year")}`;
    this.widget.querySelector(
      ".date-display"
    )!.textContent = this.currentDate.format("Do MMM YYYY");
  }
  toggleCalender() {
    this.widget.classList.toggle("active");
  }
  setupListeners() {
    this.hookElement.addEventListener(
      this.triggerEvent,
      this.toggleCalender.bind(this)
    );
    this.widget
      .querySelector(".prev-mth")!
      .addEventListener("click", this.goToPrevMonth.bind(this));
    this.widget
      .querySelector(".next-mth")!
      .addEventListener("click", this.goToNextMonth.bind(this));
    this.widget
      .querySelector("#setDate")!
      .addEventListener("click", this.setDate.bind(this));
  }
  setDate(e: Event) {
    e.preventDefault();
    (<HTMLInputElement>this.hookElement).value = this.currentDate.format(
      "Do MMM YYYY"
    );
    this.hookElement.setAttribute(
      "data-dateValue",
      this.currentDate.toDate().toISOString()
    );
    this.toggleCalender();
  }
}
