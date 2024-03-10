import { useState } from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterShowing from "./components/FilterShowing";
import { useOptions } from "./hooks/useOptions";
import PhoneData from "./constants/PhoneData.json";

const App = () => {
  const [urlParam, setUrlParam] = useState("Mobile");
  const [products, setProducts] = useState(PhoneData);
  const { selected } = useOptions();

  return (
    <div className="container mb-6">
      <Navbar
        setUrlParam={setUrlParam}
        urlParam={urlParam}
        setProducts={setProducts}
      />
      <Header />

      {selected?.length !== 0 && <FilterShowing />}

      <div className="grid grid-cols-5 mt-6 gap-10">
        <Filter urlParam={urlParam} />
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
