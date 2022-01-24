import React from "react";
import { motion } from "framer-motion";
import items from "api/portrait";

export default function Content({ itemId }) {
  const { reponse } = items.find((item) => item.id === itemId);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="font-serif"> {reponse} </p>
    </motion.div>
  );
}
