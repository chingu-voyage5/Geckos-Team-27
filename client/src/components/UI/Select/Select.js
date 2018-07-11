import React from "react";
import { capitalize } from "../../../utils";

const select = ({ first, last, name, initial, value, type = "num" }) => {
  let options = [];
  if (type === "months") {
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
    options = m.map((month, index) => (
      <option key={name + "-" + index} name={index}>
        {month}
      </option>
    ));
  } else if (type === "genders") {
    const g = ["Male", "Female", "Other"];
    options = g.map((gender, index) => (
      <option key={name + "-" + index} name={gender.toLowerCase()}>
        {gender}
      </option>
    ));
  } else {
    const [a, b] = first > last ? [first, last] : [last, first];
    for (let i = a; i >= b; i--) {
      options.push(
        <option key={name + "-" + i} name={i}>
          {i}
        </option>
      );
    }
    if (last > first) {
      options.reverse();
    }
  }
  options.unshift(
    <option key={0} name={initial} disabled>
      {initial}
    </option>
  );
  return (
    <select defaultValue={capitalize(value || initial) || name} name={name}>
      {options}
    </select>
  );
};

export default select;
