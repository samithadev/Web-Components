import { useRef } from "react";
import Card from "./components/Card";
import { useScroll } from "framer-motion";
import { projects } from "../../data";
import { Link } from "react-router-dom";

export default function MainPage() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div className=" fixed top-2 left-2">
        <Link to={"/"}>
          <h1 className=" text-lg bg-black text-white p-3 rounded-full">
            Home
          </h1>
        </Link>
      </div>
      <div
        ref={container}
        className=" flex flex-col items-center justify-center mb-[100vh]"
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
