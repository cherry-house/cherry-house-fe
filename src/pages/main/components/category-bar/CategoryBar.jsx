import React, { useState } from "react";
import CategoryButton from "./category-button/CategoryButton";
import { ReactComponent as Divider } from "../../../../images/bar.svg";
import "./CategoryBar.scss";

const CategoryBar = (categories) => {
  const [selectedCat, setSelectedCat] = useState("All");
  return (
    <div className="category">
      <CategoryButton
        name="All"
        selectedCat={selectedCat === "All" ? true : false}
        setSelectedCat={setSelectedCat}
      />
      <Divider />
      <CategoryButton
        name="Hair"
        selectedCat={selectedCat === "Hair" ? true : false}
        setSelectedCat={setSelectedCat}
      />
      <Divider />
      <CategoryButton
        name="NailPedi"
        selectedCat={selectedCat === "NailPedi" ? true : false}
        setSelectedCat={setSelectedCat}
      />
      <Divider />
      <CategoryButton
        name="etc"
        selectedCat={selectedCat === "etc" ? true : false}
        setSelectedCat={setSelectedCat}
      />
    </div>
  );
};

export default CategoryBar;
