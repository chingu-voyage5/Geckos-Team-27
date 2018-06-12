/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

const catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next);

/*
  format date 
*/
const formatDate = date => {
  let month = date.toString().slice(4, 7);
  month = monthToNum(month);
  const day = date.toString().slice(8, 10);
  const year = date.toString().slice(11, 15);
  return month + day + year;
};

function monthToNum(month) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const index = monthNames.indexOf(month);
  return index + 1;
}

module.exports = {
  formatDate,
  catchErrors
};
