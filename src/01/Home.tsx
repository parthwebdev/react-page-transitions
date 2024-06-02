import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { paragraph } from "./animations";

import image from "./image.jpg";

function Home() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <h3 className="absolute top-[6%] uppercase text-2xl font-semibold text-gray-400">
        Home Page
      </h3>

      <div className="w-[500px] h-[300px] overflow-hidden">
        <Link to="/preview">
          <img src={image} className="w-full h-full object-cover" />
        </Link>
      </div>

      <div className="overflow-hidden absolute top-[75%] text-lg text-center">
        <motion.p
          variants={paragraph}
          initial={paragraph.initial}
          animate={paragraph.animate}
          exit={paragraph.exit}
        >
          Click on the Image to <br />
          transition to next page
        </motion.p>
      </div>
    </div>
  );
}
export default Home;
