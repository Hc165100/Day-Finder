function dateFind() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let userDate = document.getElementById("inputDate").value;

  let d = new Date(userDate);
  let present = new Date();

  let content = document.getElementById("dateWindow");

  days[d.getDay()] === undefined
    ? alert(`PLEASE ENTER A DATE IN ONE OF THE FOLLOWING FORMATS:
                      MM/DD/YY
                      MM/DD/YYYY
                      MM-DD-YYYY
                      January 1 2018
                      1 January 2018`)
    : (content.innerHTML = `That is a ${days[d.getDay()]}.`);
}
