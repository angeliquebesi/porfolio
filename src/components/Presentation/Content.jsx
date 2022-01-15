import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    intro: "un langage",
    reponse: "Javascript",
  },
  {
    id: 2,
    intro: "un framework",
    reponse: "ReactJS",
  },
];

export default function Content({ itemId }) {
  const { reponse } = items.find((item) => item.id === itemId);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p> {reponse} </p>
    </motion.div>
  );
}
