import { createContext, useState, useContext, useEffect } from "react";
import { Images } from "./Images";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Data] = useState(Images);
  const [filteredData, setFilteredData] = useState(Images);
  const [category, setCategory] = useState("shop");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (category === "shop") {
      setFilteredData(Data);
    } else {
      setFilteredData(Data.filter((data) => data.category === category));
    }
  }, [category, Data]);

  const handleUpdate = (newCategory) => {
    setCategory(newCategory);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <DataContext.Provider
      value={{ filteredData, handleUpdate, handleAddToCart, cartItems }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
