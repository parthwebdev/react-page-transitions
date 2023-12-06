import { motion } from "framer-motion";
import { textAnimation } from "./animations";

type Props = {
  text: string;
  className?: string;
};

function AnimatedText({ text, className }: Props) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 1,
        staggerChildren: 0.05,
      }}
      className="inline-block relative overflow-hidden"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          variants={textAnimation}
          transition={{ duration: 1, ease: "backInOut" }}
          className={`inline-block relative ${className}`}
          key={`${letter}-${index}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
export default AnimatedText;
