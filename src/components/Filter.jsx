import { filterData } from "../constants/filterData";
import Option from "./Option";

const Filter = ({ urlParam }) => {
  //to store the object value which match with urlParam
  let filterOptions;
  for (const key in filterData) {
    if (key === urlParam) {
      filterOptions = filterData[key];
    }
  }

  //to store keys and values on matching object
  let keys = [];
  let values = [];

  for (const key in filterOptions) {
    keys.push(key);
    values.push(filterOptions[key]);
  }

  return (
    <div>
      {keys.map((k, i) => {
        return <Option key={i} keyName={k} values={values} index={i} />;
      })}
    </div>
  );
};

export default Filter;
