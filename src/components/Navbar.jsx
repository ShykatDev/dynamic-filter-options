import { useOptions } from "../hooks/useOptions";
import PhoneData from "../constants/PhoneData.json";
import LaptopData from "../constants/LaptopData.json";
import Logo from "../assets/logo-01.png";

const Navbar = ({ setUrlParam, urlParam, setProducts }) => {
  const { setSelected } = useOptions();

  return (
    <div className="h-[10vh] flex justify-between items-center gap-6">
      <div>
        <img src={Logo} alt="logo" className="w-14" />
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setUrlParam("Mobile");
            setProducts(PhoneData);
            setSelected([]);
          }}
          className={`px-6 py-2 border rounded-md border-gray-800 ${
            urlParam === "Mobile" && "bg-gray-900"
          }`}
        >
          Get Mobiles
        </button>
        <button
          onClick={() => {
            setUrlParam("Laptop");
            setProducts(LaptopData);
            setSelected([]);
          }}
          className={`px-6 py-2 border rounded-md border-gray-800 ${
            urlParam === "Laptop" && "bg-gray-900"
          }`}
        >
          Get Laptops
        </button>
      </div>
    </div>
  );
};

export default Navbar;
