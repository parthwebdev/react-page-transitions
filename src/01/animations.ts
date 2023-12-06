import { cubicBezier } from "framer-motion";

const ease = { ease: cubicBezier(0.6, 0.01, -0.05, 0.9) };

const paragraph = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: { duration: 1, ...ease },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const textAnimation = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
  },
};

export { ease, paragraph, textAnimation };
