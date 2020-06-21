let startDateInput = document.querySelector("#startDate");
let endDateInput = document.querySelector("#endDate");
let startHost = document.querySelector(".myCal1");
let endHost = document.querySelector(".myCal2");
new Calender({
  hookEl: startDateInput,
  eventType: "click",
  hostEl: startHost,
});
new Calender({ hookEl: endDateInput, eventType: "click", hostEl: endHost });
