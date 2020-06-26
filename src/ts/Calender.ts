import {
  startOfMonth,
  getDaysInMonth,
  addMonths,
  subMonths,
  format,
} from "date-fns";
export class Calender {
  private _d: Date;
  widget: HTMLElement;
  months: Map<number, string>;
  hook: HTMLDivElement;
  host: HTMLInputElement;
  constructor({
    hookId,
    hostId,
    startingDate,
  }: {
    hookId: string;
    hostId: string;
    startingDate?: Date;
  }) {
    this._d = startOfMonth(startingDate ? startingDate : new Date());
    this.months = new Map([
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
    this.hook = document.getElementById(hookId) as HTMLDivElement;
    this.host = document.getElementById(hostId) as HTMLInputElement;
    this.widget = this.createWidget();
    let next = this.widget.querySelector(".right-arrow");
    let prev = this.widget.querySelector(".left-arrow");
    next!.addEventListener("click", this.goToNext.bind(this));
    prev!.addEventListener("click", this.goToPrev.bind(this));
    this.populate();
    //
    // let hook = document.getElementById(this.hook);
    // (<HTMLElement>hook.previousElementSibling).style.position = "relative";
    this.render();
  }

  populate() {
    const numOfDays = getDaysInMonth(this._d);
    let dayGrid = this.widget.querySelector(".day-grid");
    dayGrid!.textContent = "";
    for (let i = 0; i < numOfDays; i++) {
      const dayEl = document.createElement("div");
      dayEl.textContent = `${i + 1}`;
      dayEl.classList.add("day");
      dayEl.addEventListener("click", this.selectDate.bind(this));
      dayGrid!.appendChild(dayEl);
    }
    const firstDayDiv = this.widget.querySelector(".day");
    firstDayDiv!.classList.add("first");
    let root = document.documentElement;
    root.style.setProperty(
      "--col",
      `${this._d.getDay() == 0 ? 7 : this._d.getDay()}`
    );
    let monthHeader = this.widget.querySelector(".header__month-disp h3");
    monthHeader!.textContent = `${this.months.get(
      this._d.getMonth()
    )}, ${this._d.getFullYear()}`;
  }

  goToPrev() {
    this._d = subMonths(this._d, 1);
    this.populate();
  }
  goToNext() {
    this._d = addMonths(this._d, 1);
    this.populate();
  }

  save() {
    let result = format(this._d, "dd-MM-yyyy");
    this.host.value = result;
    this.host.setAttribute("data-dateValue", this._d.toISOString());
    this.show();
    return this._d;
  }
  createWidget() {
    const div = document.createElement("div");
    div.className = "calender";
    div.innerHTML = `
        <div class="header">
          <div class="header__month-disp"><h3>${this.months.get(
            this._d.getMonth()
          )}</h3></div>
          <div class="header__arrows">
            <a href="#" class="left-arrow"><i class="fas fa-chevron-left"></i></a>
            <a href="#" class="right-arrow"
              ><i class="fas fa-chevron-right"></i
            ></a>
          </div>
        </div>
        <div class="body">
          <div class="days">
            <div class="">MON</div>
            <div class="">TUE</div>
            <div class="">WED</div>
            <div class="">THU</div>
            <div class="">FRI</div>
            <div class="">SAT</div>
            <div class="">SUN</div>
          </div>
          <div class="day-grid">
          </div>
        </div>
        `;
    return div;
  }
  // insertAfter(newNode, referenceNode) {
  //   referenceNode.innerHTML = "";
  //   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  // }
  render() {
    this.hook.appendChild(this.widget);
    // this.insertAfter(this.widget, hook);
  }
  show() {
    this.widget.classList.toggle("show");
  }
  selectDate(e: Event) {
    let day = (<HTMLDivElement>e.target).textContent;
    this._d = new Date(this._d.getFullYear(), this._d.getMonth(), Number(day));
    this.save();
    // console.log(this._d);
  }
}
