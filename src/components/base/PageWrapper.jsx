import React from "react";
import "./PageWrapper.scss";

const PageWrapper = ({ responsive, children }) => (
  <div className="wrapper" responsive={responsive}>
    {children}
  </div>
);

export default PageWrapper;
