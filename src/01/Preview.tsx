import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ease } from "./animations";

import image from "./image.jpg";
import AnimatedText from "./AnimatedText";

function Preview() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <h3 className="absolute top-[6%] uppercase text-gray-400">
        Preview Page
      </h3>

      <motion.div
        className="w-[500px] h-[300px]"
        animate={{
          x: "-50%",
          width: "680px",
          height: "450px",
        }}
        transition={{ duration: 1.5, ...ease }}
      >
        <Link to="/">
          <img src={image} className="w-full h-full object-cover" />
        </Link>
      </motion.div>

      <div className="absolute left-[52%]">
        <AnimatedText
          text="GTA 6"
          className="text-8xl font-darker font-bold mb-3"
        />

        <div className="overflow-hidden text-lg">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0",
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Grand Theft Auto VI (GTA 6) is the eighth main game in the Grand
            Theft Auto series. It is set to be released in 2025 for PlayStation
            5 and Xbox Series X|S.
          </motion.p>
        </div>
        {/* <p className="text-lg"></p> */}

        {/* <p>Characters: Dual protagonists, Jason and Lucia</p> */}
      </div>

      {/* <p>GTA 6 is taking us back to Vice City.</p> */}
    </div>
  );
}

export default Preview;
