import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Content from "./Content";

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

export default function Item({ itemId }) {
  const { intro } = items.find((item) => item.id === itemId);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>`Si j&rsquoétais ${intro} je serais` </motion.div>
      <AnimatePresence>
        {isOpen && <Content key={itemId} itemId={itemId} />}{" "}
      </AnimatePresence>
    </motion.li>
  );
}
