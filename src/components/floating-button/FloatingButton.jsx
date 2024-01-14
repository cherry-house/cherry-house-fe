import React from "react";
import { ReactComponent as Cherry } from "../../images/cherry.svg";
import { ReactComponent as Pencil } from "../../images/pencil.svg";
import "./FloatingButton.scss";

const FloatingButton = () => {
  return (
    <div>
      <button className="writeButton">
        <Pencil />
      </button>
      <button className="floatingButton">
        <Cherry />
      </button>
    </div>
  );
};

export default FloatingButton;
