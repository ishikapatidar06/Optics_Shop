import logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { useData } from "../DataContext";

function Navbar() {
  const { handleUpdate } = useData();

  return (
    <div className="flex w-full h-20 fixed z-10 bg-[#f5f5f5]">
      <div className="h-20">
        <Link to="/">
          <img src={logo} alt="logo" className="h-full px-8" />
        </Link>
      </div>
      <div className="flex py-7 text-sm font-semibold">
        <div className="px-3 cursor-pointer hover:text-[#1292bb]">
          <Link to="/" onClick={() => handleUpdate("featured")}>
            Home
          </Link>
        </div>
        <div className="px-3 cursor-pointer hover:text-[#1292bb]">
          <Link to="/featured" onClick={() => handleUpdate("featured")}>
            Featured
          </Link>
        </div>
        <div className="px-3 cursor-pointer hover:text-[#1292bb]">
          <Link to="/shop" onClick={() => handleUpdate("shop")}>
            Shop
          </Link>
        </div>
        <div className="px-3 cursor-pointer hover:text-[#1292bb]">
          <Link to="/newArrivals" onClick={() => handleUpdate("newArrivals")}>
            New Arrivals
          </Link>
        </div>
      </div>
      <div className="py-7 pl-[900px] cursor-pointer">
        <Link to="/cart">
          <PiShoppingCartBold />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
