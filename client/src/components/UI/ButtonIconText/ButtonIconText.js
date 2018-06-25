import React from "react";

const ButtonIconText = ({ container, btnClass, onClick, icon, text }) => (
  <div className={container}>
    <button className={btnClass} onClick={onClick}>
      <span>
        <div>
          <div>
            <i className={icon} />
          </div>
          <div>
            <span>{text}</span>
          </div>
        </div>
      </span>
    </button>
  </div>
);

export default ButtonIconText;
