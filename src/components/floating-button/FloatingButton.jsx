import React from "react";
import { ReactComponent as Cherry } from "../../images/cherry.svg";
import { ReactComponent as Pencil } from "../../images/pencil.svg";
import "./FloatingButton.scss";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  return (
    <div>
      <Link to="/write" className="writeButton">
        <Pencil />
      </Link>
      <button className="floatingButton">
        <Cherry />
      </button>
    </div>
  );
};

export default FloatingButton;
