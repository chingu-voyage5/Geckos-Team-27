import React from "react";
// import PropTypes from "prop-types";
// import "./Input.css";

const input = ({ first, last, name, months }) => {
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

// input.propTypes = {
//   divClasses: PropTypes.string,
//   inputClasses: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ])
// };

export default input;
