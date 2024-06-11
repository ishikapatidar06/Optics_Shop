import Cover from "../../assets/woman-with-beret-turtleneck-sweater (1).png";
import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
    <>
      <div className=" pt-24 ">
        <div className="w-[95%] m-auto">
          <div className="bg-[#74abbe] flex">
            <div className="w-1/3">
              <img src={Cover} alt="Img" className="h-full" />
            </div>

            <div className="py-20 px-28">
              <div className="text-5xl text-white py-2 font-serif">
                <span className="text-[#026679] ">Discover</span> a new
                <span className="text-[#026679] "> vision</span>
              </div>
              <div className="text-white text-base font-semibold py-8">
                Step into a world of clarity and style. Our glasses, sunglasses,
                and contacts are designed to enhance your vision and elevate
                your look—all while keeping your budget in check.
              </div>
              <div className="bg-white p-2 font-semibold text-[#026679] w-24 rounded-md ">
                <Link to="shop">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
