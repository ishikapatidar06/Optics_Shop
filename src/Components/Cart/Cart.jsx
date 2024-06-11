import { useData } from "../DataContext";

const Cart = () => {
  const { cartItems } = useData();

  return (
    <div className="py-24">
      <div className="grid grid-cols-2 w-full px-24 md:grid-cols-6 overflow-auto p-2 gap-8">
        {cartItems.map((item, index) => (
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
              <p className="text-base font-bold text-center">{item.itemName}</p>
              <p className="text-center">
                <span>Price: </span>
                <span>₹{item.price}</span>
              </p>
            </div>
            <div className="text-center bg-slate-200 h-8 mt-1 p-1">
              <button className="font-semibold">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
