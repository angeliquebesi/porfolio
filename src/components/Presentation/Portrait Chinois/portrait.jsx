import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import items from "api/portrait";
import Item from "./Item";

export default function Portrait() {
  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        className=" flex flex-col flex-wrap bg-white p-4 gap-4 rounded-2xl md:flex-row justify-around text-center max-w-screen-md"
      >
        {items.map((item) => (
          <Item key={item} itemId={item.id} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}
