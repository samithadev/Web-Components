import { useEffect, useState } from "react";
import { data } from "../../sliderdata";
import { Link } from "react-router-dom";

export default function ImageSlider() {
  const [activeImg, setactiveImg] = useState(0);

  const handlePre = () => {
    if (activeImg <= 0) {
      setactiveImg(data.length - 1);
    } else {
      setactiveImg(activeImg - 1);
    }
  };

  const handleNext = () => {
    setactiveImg((activeImg + 1) % data.length);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  return (
    <div>
      <div className=" fixed top-2 left-2">
        <Link to={"/"}>
          <h1 className=" text-lg bg-black text-white p-3 rounded-full">
            Home
          </h1>
        </Link>
      </div>
      <div className="flex justify-center items-center h-[100vh]">
        <button
          className=" bg-black text-white p-3 mr-4 rounded-xl"
          onClick={handlePre}
        >
          previos
        </button>
        {data.map((image, index) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              key={index}
              className="w-[800px] h-[500px] rounded-xl"
              style={{ display: activeImg === index ? "block" : "none" }}
            />
          );
        })}
        <button
          className=" bg-black text-white p-3 ml-4 rounded-xl"
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
}
