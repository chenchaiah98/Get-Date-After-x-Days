const addDays = require("date-fns/addDays");

const getDays = (days) => {
  const date = addDays(new Date(2020, 7, 22), days);
  console.log(date);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
getDays(10);
module.exports = getDays;
