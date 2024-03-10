import { useState } from "react";
import { FilterOptionContex } from "../context";

const FilterOptionsProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  return (
    <FilterOptionContex.Provider value={{ selected, setSelected }}>
      {children}
    </FilterOptionContex.Provider>
  );
};

export default FilterOptionsProvider;
