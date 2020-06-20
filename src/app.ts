import { AppController } from "./AppController";
function main() {
  AppController.init();
}

//Start Application
main();

import moment, { Moment } from "moment";
let newDate:Moment;
newDate= moment(new Date(2020,5,14));
// let date1 = moment(new Date(2020, 5, 14));
// let date2 = moment(new Date(2020, 5, 16));
// console.log(date1.isBefore(date2));
