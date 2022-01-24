import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import items from "api/portrait";
import Content from "./Content";

export default function Item({ itemId }) {
  const { intro } = items.find((item) => item.id === itemId);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      className="bg-blue-100 rounded-xl p-3 mb-2 truncate cursor-pointer"
    >
      <motion.div layout>
        <p>
          Si j&rsquo;étais{" "}
          <span className="font-serif text-blue-600">{intro}</span> je serais
        </p>{" "}
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content key={itemId} itemId={itemId} />}{" "}
      </AnimatePresence>
    </motion.li>
  );
}
