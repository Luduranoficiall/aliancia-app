"use client";

import { motion } from "framer-motion";

export function IndicationTree({ nodes }) {
  return (
    <div style={{ padding: 20 }}>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{
            padding: 16,
            background: "rgba(255,215,0,0.12)",
            borderRadius: 20,
            marginBottom: 12,
            border: "1px solid rgba(255,215,0,0.35)"
          }}
        >
          <strong style={{ color: "#FFD700" }}>{node.name}</strong>
          <p>Nível: {node.level}</p>
        </motion.div>
      ))}
    </div>
  );
}
