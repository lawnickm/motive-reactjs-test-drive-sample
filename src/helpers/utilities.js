export const monthNames = [
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

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const phoneNumberIsValid = (phoneNumber) => {
  var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return regex.test(phoneNumber);
};

export const generateDates = () => {
  var dates = [];

  var startDate = new Date();
  if (startDate.getHours() > 17) startDate.setDate(startDate.getDate() + 1);   // check whether the time is greater than 5pm

  dates.push(startDate);

  var endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  let tempDate = new Date(startDate);
  while (tempDate < endDate) {
    dates.push(tempDate);
    let newDate = tempDate.setDate(tempDate.getDate() + 1);
    tempDate = new Date(newDate);
  }
  return dates;
};

export const generateHours = (selectedDate) => {
  /*
  if the selected day is today;
    we check the current day and time to display appropiate hours.
  */
  const today = new Date();
  if (formatDate(today) == formatDate(selectedDate)) {
    if (today.getHours < 9) {
      today.setHours(9);
      today.setMinutes(0);
    } else {
      if (today.getMinutes() >= 30) {
        today.setHours(today.getHours() + 1);
        today.setMinutes(0);
      } else {
        today.setMinutes(30);
      }
    }
  } else {
    today.setHours(9);
    today.setMinutes(0);
  }

  const tempHours = [];

  while (today.getHours() < 17 || today.getMinutes() < 1) {
    let stringTime = today.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    tempHours.push(stringTime);
    today.setMinutes(today.getMinutes() + 30);
  }

  return tempHours;
};

/* 
    Below is a code snippet taken from =>
    https://bobbyhadz.com/blog/javascript-get-date-without-time
    
    The code generates formatted dates (YYYY-MM-DD).
*/

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export const formatDate = (date) => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
};
