import React from "react";

const select = ({ first, last, name, value, onChange }) => {
  let options = [];
  const [a, b] = first > last ? [first, last] : [last, first];
  for (let i = a; i >= b; i--) {
    options.push(
      <option key={i} value={i} name={name}>
        {i}
      </option>
    );
  }
  if (last > first) {
    options.reverse();
  }
  options.unshift(
    <option key={0} name={name} value={name}>
      {name}
    </option>
  );
  return (
    <select value={value} onChange={onChange}>
      {options}
    </select>
  );
};

export default select;
