import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className=" text-3xl font-semibold">Animations</h1>

      <ul className=" text-xl mt-8 text-center text-white">
        <Link to={"/card-scroll"}>
          <li className=" bg-black p-3">Cards</li>
        </Link>
        <Link to={"/image-slider"}>
          <li className=" bg-slate-600 p-3 mt-2">Image Slider</li>
        </Link>
      </ul>
    </div>
  );
}
