const ProductCard = ({ data }) => {
  return (
    <div className="rounded-xl overflow-hidden p-3 bg-gray-500 bg-opacity-5 border border-gray-900">
      <div className="relative rounded-xl overflow-hidden">
        <img src={data.img} alt="" className="w-full h-[20vh] object-cover" />
        <div className=" w-full h-full absolute top-0 left-0 bg-gray-950 bg-opacity-50"></div>
      </div>
      <div className="py-3">
        <h2>{data.title}</h2>
        <p className="line-clamp-2 mt-1 text-gray-500 text-sm">
          {data.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="italic font-semibold">${data.price}</p>
          <button className="px-4 py-2 bg-gray-950 border border-gray-700 rounded-md text-sm">
            {" "}
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
