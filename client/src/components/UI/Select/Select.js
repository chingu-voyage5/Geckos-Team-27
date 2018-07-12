import React from "react";
import PropTypes from "prop-types";

const select = ({
  first,
  last,
  name,
  initial,
  type = "num",
  value,
  onChange
}) => {
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
    <option key={0} name={initial || name}>
      {initial || name}
    </option>
  );
  return (
    <select name={name} value={value} onChange={onChange}>
      {options}
    </select>
  );
};

select.propTypes = {
  first: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  last: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  initial: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default select;
