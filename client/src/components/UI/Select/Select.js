import React from "react";

const select = ({ first, last, name, months }) => {
  let options = [];
  if (!months) {
    const [a, b] = first > last ? [first, last] : [last, first];
    for (let i = a; i >= b; i--) {
      options.push(
        <option key={i} name={i}>
          {i}
        </option>
      );
    }
    if (last > first) {
      options.reverse();
    }
  } else {
    const m = [
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
      "December"
    ];
    options = m.map((month, index) =>
      options.push(
        <option key={index} name={month.toLowerCase()}>
          {month}
        </option>
      )
    );
  }

  options.unshift(
    <option key={0} name={name} disabled>
      {months ? "Month" : name}
    </option>
  );
  return <select defaultValue={months ? "Month" : name}>{options}</select>;
};

export default select;
