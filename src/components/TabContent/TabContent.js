import React from "react";
// import Spinner from "../Spinner";

export const TabContent = ({ children, isVisible }) => {
  if (!isVisible) {
    return <div hidden={true}>{null}</div>;
  }
  return <div>{children}</div>;
};
