import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Item from "./Item";

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

export default function Portrait() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map((item) => (
          <Item key={item} itemId={item.id} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}
