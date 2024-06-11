import Cover from "../../assets/woman-with-beret-turtleneck-sweater (1).png";
import { useData } from "../DataContext";
const Featured = () => {
  const { filteredData, handleAddToCart } = useData();

  return (
    <>
      <div className=" pt-24 ">
        <div className=" w-[95%] m-auto">
          <div className="h-96 bg-[#74abbe] flex">
            <div className="w-1/3">
              <img src={Cover} alt="Img" className="h-full" />
            </div>

            <div className="py-40 px-44">
              <div className="text-5xl text-white py-2 font-serif">
                Featured
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[95%] m-auto md:grid-cols-6 overflow-auto mt-10 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="h-60 w-48 border border-slate-300 shadow-xl hover:border-[#8ec4d6] hover:border-2"
            >
              <div className="p-2">
                <img
                  src={item.img}
                  alt={item.itemName}
                  className="sm:w-full rounded-xl object-contain h-32 p-2"
                />
              </div>
              <div className="bg-[#c3dde6] h-14">
                <p className="text-base font-bold text-center">
                  {item.itemName}
                </p>
                <p className="text-center">
                  <span>Price: </span>
                  <span>₹{item.price}</span>
                </p>
              </div>
              <div className="text-center bg-slate-200 h-8 mt-1 p-1">
                <button
                  className="font-semibold"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
