export const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"
];

export const phoneNumberIsValid = (phoneNumber) => {
  var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return regex.test(phoneNumber);
}

export const generateDates = () => {
  var dates = [];

  var startDate = new Date();
  dates.push(startDate)

  var endDate = new Date();
  endDate.setDate(endDate.getDate() + 14)

  let tempDate = new Date(startDate);
  while (tempDate < endDate) {
      dates.push(tempDate)
      let newDate = tempDate.setDate(tempDate.getDate() + 1);
      tempDate = new Date(newDate);
  }
  return dates
}

/* 
    Below is a code snippet taken from =>
    https://bobbyhadz.com/blog/javascript-get-date-without-time
    
    The code generates formatted dates (YYYY-MM-DD).
*/

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

export const formatDate = (date) => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
