import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Card(props) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const cardScale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);
  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center h-[100vh] sticky top-0 "
    >
      <motion.div
        style={{
          scale: cardScale,
          backgroundColor: `${props.color}`,
          top: `calc(-5vh + ${props.i * 25}px)`,
        }}
        className={`relative grid grid-cols-[2fr,1fr]  text-white p-8 w-[700px] h-[400px] rounded-2xl`}
      >
        <div>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <p>{props.link}</p>
          <p>{props.color}</p>
        </div>

        <div className="object-cover overflow-hidden">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <img src={props.src} alt="img alt" className=" w-[100%] h-[100%]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
