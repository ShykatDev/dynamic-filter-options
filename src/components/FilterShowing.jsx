import { useOptions } from "../hooks/useOptions";

const FilterShowing = () => {
  const { selected } = useOptions();

  return (
    <div className="mt-10 flex justify-end items-center gap-3">
      <p className="text-gray-400">Filter products based on: </p>
      {selected.map((select, i) => {
        return (
          <p
            key={i}
            className="text-sm px-4 py-1 border border-gray-800 bg-gray-900 rounded-md"
          >
            {select}
          </p>
        );
      })}
    </div>
  );
};

export default FilterShowing;
