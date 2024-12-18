'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center z-50">
      <motion.div
        className="text-6xl font-bold text-orange-600"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        লোড হচ্ছে...
      </motion.div>
      <motion.div
        className="absolute inset-0 border-t-8 border-orange-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "0% 0%" }}
      />
    </div>
  )
}

