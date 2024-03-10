import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useOptions } from "../hooks/useOptions";

const Option = ({ values, keyName, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { selected, setSelected } = useOptions();

  const handleChange = (e, value) => {
    const { checked } = e.target;

    if (checked) {
      setSelected([...selected, value]);
    } else {
      const popValues = selected.filter((val) => val !== value);
      setSelected(popValues);
    }
  };

  return (
    <div className="border border-gray-900 rounded-lg overflow-hidden mb-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 bg-gray-900 flex items-center justify-between cursor-pointer"
      >
        <p>{keyName}</p>
        <MdKeyboardArrowDown
          className={`${isOpen ? "rotate-0" : "rotate-180"} duration-300`}
        />
      </div>
      {isOpen && (
        <div className="">
          {values[index].map((v, i) => {
            return (
              <div key={i} className="flex items-center gap-3 mb-2 py-1 px-4 ">
                <input type="checkbox" onChange={(e) => handleChange(e, v)} />
                <p className="text-gray-400">{v}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Option;
