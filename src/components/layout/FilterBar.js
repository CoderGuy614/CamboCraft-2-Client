import React, { useContext } from "react";
import ToggleBraColor from "../Icons/ToggleBraColor";
import ToggleOutfitColor from "../Icons/ToggleOutfitColor";
import ToggleBikiniColor from "../Icons/ToggleBikiniColor";
import ToggleDressColor from "../Icons/ToggleDressColor";
import ToggleSkirtColor from "../Icons/ToggleSkirtColor";

import ProductContext from "../../context/product/productContext";

const FilterBar = () => {
  const productContext = useContext(ProductContext);

  const {
    toggleFilter,
    products,
    filteredProducts,
    filteredCategories,
    applyFilters,
  } = productContext;

  const isFilled = (categoryName) => {
    if (filteredCategories.find((e) => e == categoryName)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center filters">
          <h5 className="">Choose a Product Type</h5>
          <ul className="list-inline">
            <li
              onClick={() => {
                toggleFilter("Bra");
                applyFilters();
              }}
            >
              <ToggleBraColor colored={isFilled("Bra")} />
            </li>
            <li
              onClick={() => {
                toggleFilter("Outfit");
                applyFilters();
              }}
            >
              <ToggleOutfitColor colored={isFilled("Outfit")} />
            </li>
            <li
              onClick={() => {
                toggleFilter("Bikini");
                applyFilters();
              }}
            >
              <ToggleBikiniColor colored={isFilled("Bikini")} />
            </li>
            <li
              onClick={() => {
                toggleFilter("Dress");
                applyFilters();
              }}
            >
              <ToggleDressColor colored={isFilled("Dress")} />
            </li>
            <li
              onClick={() => {
                toggleFilter("Skirt");
                applyFilters();
              }}
            >
              <ToggleSkirtColor colored={isFilled("Skirt")} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
