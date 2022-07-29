export const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"
];


/* 
    Below code snippet is taken from =>
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