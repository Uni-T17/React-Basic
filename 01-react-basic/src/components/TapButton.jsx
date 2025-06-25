import React, { Children } from "react";

const TapButton = ({ buttonName, children, ...props }) => {
  return (
    <>
      {children}
      <button {...props}>{buttonName}</button>
    </>
  );
};

export default TapButton;
