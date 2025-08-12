'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center flex flex-col items-center justify-center min-h-screen"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Building the Future with
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> AI</span>
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        We build cutting-edge AI solutions that transform businesses and drive growth in the digital age.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link
          href="/products"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Explore Our Products
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default AnimatedHero;
