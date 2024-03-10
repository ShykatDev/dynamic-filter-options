import { useContext } from "react";
import { FilterOptionContex } from "../context";

const useOptions = () => {
  return useContext(FilterOptionContex);
};
export { useOptions };
