import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="col-span-4 grid grid-cols-4 gap-4 pb-10">
      {products.map((data) => {
        return <ProductCard key={data.id} data={data} />;
      })}
      {products.reverse().map((data) => {
        return <ProductCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Products;
