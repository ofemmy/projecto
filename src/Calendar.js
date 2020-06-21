class Calender {
  currentDate;
  widget;
  monthsArray;
  hostElement;
  hookElement;
  triggerEvent;
  constructor({ hookEl, hostEl, eventType }) {
    this.monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
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
  createWidget(parent) {
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

    //append each div element to the a single div
    parent.appendChild(calMonth);
    parent.appendChild(dateDisplay);
    parent.appendChild(daysDiv);
    parent.appendChild(btn);
    // parent
    //   .querySelector(".prev-mth")
    //   .addEventListener("click", this.goToPrevMonth.bind(this));
    // parent
    //   .querySelector(".next-mth")
    //   .addEventListener("click", this.goToNextMonth.bind(this));
  }
  goToNextMonth() {
    this.currentDate.add(1, "M");
    this.populateDays();
    this.widget.querySelector(".mth").textContent = `${
      this.monthsArray[this.currentDate.get("month")]
    }, ${this.currentDate.get("year")}`;
  }
  goToPrevMonth() {
    this.currentDate.subtract(1, "M");
    this.populateDays();
    this.widget.querySelector(".mth").textContent = `${
      this.monthsArray[this.currentDate.get("month")]
    }, ${this.currentDate.get("year")}`;
  }
  populateDays() {
    let days_element = this.widget.querySelector(".days");
    days_element.innerHTML = "";
    let amount_days = this.currentDate.daysInMonth();

    for (let i = 0; i < amount_days; i++) {
      const day_element = document.createElement("div");
      day_element.classList.add("day");
      day_element.textContent = i + 1;

      day_element.addEventListener("click", (e) => {
        this.currentDate.date(Number(e.target.textContent));
        this.widget.querySelector(
          ".date-display"
        ).textContent = this.currentDate.format("Do MMM YYYY");
      });

      days_element.appendChild(day_element);
    }
  }
  displayDate() {
    this.widget.querySelector(".mth").textContent = `${
      this.monthsArray[this.currentDate.get("month")]
    }, ${this.currentDate.get("year")}`;
    this.widget.querySelector(
      ".date-display"
    ).textContent = this.currentDate.format("Do MMM YYYY");
  }
  toggleCalender(e) {
    this.widget.classList.toggle("active");
  }
  setupListeners() {
    this.hookElement.addEventListener(
      this.triggerEvent,
      this.toggleCalender.bind(this)
    );
    this.widget
      .querySelector(".prev-mth")
      .addEventListener("click", this.goToPrevMonth.bind(this));
    this.widget
      .querySelector(".next-mth")
      .addEventListener("click", this.goToNextMonth.bind(this));
    this.widget
      .querySelector("#setDate")
      .addEventListener("click", this.setDate.bind(this));
  }
  setDate(e) {
    e.preventDefault();
    this.hookElement.value = this.currentDate.format("Do MMM YYYY");
    this.hookElement.setAttribute("data-dateValue", this.currentDate._d);
    this.toggleCalender();
  }
}
