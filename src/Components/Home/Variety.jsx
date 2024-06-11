import { useData } from "../DataContext";

const Variety = () => {
  const { filteredData } = useData();

  return (
    <>
      <div className="w-full mt-6 sm:mt-14 px-2 sm:px-10 mb-6">
        <div className="text-base sm:text-5xl font-serif font-bold text-[#477d8f]">
          Featured
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 p-2 sm:p-4 gap-3 mt-4 sm:mt-10 bg-[#74abbe] rounded-xl">
          {filteredData.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                className="rounded-xl w-full p-0 shadow-xl hover:p-6"
                alt={item.itemName}
              />
              <div className="flex justify-center pt-4 font-bold text-xs sm:text-lg font-serif">
                {item.itemName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Variety;
