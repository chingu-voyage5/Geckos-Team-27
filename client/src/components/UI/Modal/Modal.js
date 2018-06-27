import React, { Fragment } from "react";

import "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  console.log(props.modalClasses);
  const modalClasses =
    "Modal" + (props.modalClasses ? ` ${props.modalClasses}` : "");
  return (
    <Fragment>
      <Backdrop
        classes="Modal-Backdrop"
        clicked={props.close}
        visible={props.open}
      />
      <div className={props.open ? `${modalClasses} Open` : `${modalClasses}`}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;
