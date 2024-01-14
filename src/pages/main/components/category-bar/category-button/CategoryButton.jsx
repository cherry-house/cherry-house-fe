import React from "react";
import "./CategoryButton.scss";

const category = {
  All: "전체",
  Hair: "헤어",
  NailPedi: "네일 / 패디",
  etc: "기타",
};

const CategoryButton = ({ name, selectedCat, setSelectedCat }) => {
  return (
    <button
      className={`catButton ${selectedCat ? "activeButton" : null}`}
      onClick={() => setSelectedCat(name)}
    >
      {category[name]}
    </button>
  );
};

export default CategoryButton;
